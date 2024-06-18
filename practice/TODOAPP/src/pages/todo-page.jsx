import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import List from '../components/TodoList';
import Filter from '../components/Filter';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import Statistics from '../components/TodoStatistics';
import Sidebar from '../components/Sidebar';

async function getTodosApi() {
    try {
        const response = await fetch("http://localhost:8001/todos");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching todos:", error);
        return [];
    }
}

function TodoPage() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    const filterTitle = searchParams.get('title') || '';
    const filterCompleted = searchParams.get('completed') === 'true';
    const selectedTab = parseInt(searchParams.get('tab')) || 0;

    useEffect(() => {
        async function fetchTodos() {
            setLoading(true);
            try {
                const initialTodos = await getTodosApi();
                setTodos(initialTodos);
            } catch (error) {
                console.error('Error fetching todos:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchTodos();
    }, [location.pathname]);

    const addTodo = async (event, inputRef, selectedTags) => {
        event.preventDefault();

        const newTodoTitle = inputRef.current.value.trim();
        if (newTodoTitle === '') return;

        const newTodo = {
            title: newTodoTitle,
            isComplete: false,
            label: selectedTags
        };

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:8001/todos', newTodo);
            setTodos([...todos, response.data]);
            inputRef.current.value = '';
            inputRef.current.focus();
        } catch (error) {
            console.error('Error adding new to-do:', error);
        } finally {
            setLoading(false);
        }
    };

    const toggleTodoComplete = async (id) => {
        const todo = todos.find(todo => todo.id === id);
        const updatedTodo = { ...todo, isComplete: !todo.isComplete };

        try {
            setLoading(true);
            await axios.patch(`http://localhost:8001/todos/${id}`, { isComplete: updatedTodo.isComplete });
            setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
        } catch (error) {
            console.error("Error updating todo", error);
        } finally {
            setLoading(false);
        }
    };

    const removeTodo = async (id) => {
        console.log(`Attempting to delete todo with ID: ${id}`);
        try {
            setLoading(true);
            await axios.delete(`http://localhost:8001/todos/${id}`);
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error("Error deleting todo", error);
        } finally {
            setLoading(false);
        }
    };

    const filteredTodos = todos.filter(todo => {
        const matchesTitle = todo.title.toLowerCase().includes(filterTitle.toLowerCase());
        const matchesCompleted = !filterCompleted || todo.isComplete;
        return matchesTitle && matchesCompleted;
    });

    const todosToDisplay = filteredTodos.filter(todo => {
        if (selectedTab === 0) return true;
        if (selectedTab === 1) return !todo.isComplete;
        if (selectedTab === 2) return todo.isComplete;
        return true;
    });

    const completedTodos = filteredTodos.filter(todo => todo.isComplete);
    const activeTodos = filteredTodos.filter(todo => !todo.isComplete);

    return (
        <>
            <Sidebar />
            <div className="container">
                <h1>Todo List</h1>
                <Button variant="contained" sx={{ backgroundColor:"#0c0d48c5!important", marginBlock:"1em"}} onClick={() => navigate('/todo/create')}>Create Todo</Button>
                <Filter
                filterTitle={filterTitle}
                filterCompleted={filterCompleted}
                todos={todos}
                selectedTab={selectedTab}
                setSearchParams={setSearchParams}
                />
                {loading ? (
                    <div style={{ width: 300 }}>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                    </div>
                ) : (
                    <List
                        todos={todosToDisplay}
                        toggleTodoComplete={toggleTodoComplete}
                        removeTodo={removeTodo}
                    />
                )}
                <Statistics
                    todos={filteredTodos}
                    activeTodos={activeTodos.length}
                    completedTodos={completedTodos.length}
                />
            </div>
            <Outlet />
        </>
    );
}

export default TodoPage;
