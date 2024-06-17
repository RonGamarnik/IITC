import React, { useEffect, useState } from 'react';
import List from '../components/TodoList';
import Form from '../components/TodoForm';
import Filter from '../components/Filter';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import ResponsiveAppBar from '../components/NavBar';
import Statistics from '../components/TodoStatistics';

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

function HomePage() {
    const [todos, setTodos] = useState([]);
    const [filterTitle, setFilterTitle] = useState('');
    const [filterCompleted, setFilterCompleted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0); // State for managing selected tab

    useEffect(() => {
        async function fetchTodos() {
            setLoading(true); // Start loading indicator
            try {
                const initialTodos = await getTodosApi();
                setTodos(initialTodos);
            } catch (error) {
                console.error('Error fetching todos:', error);
            } finally {
                setLoading(false); // Stop loading indicator
            }
        }
        fetchTodos();
    }, []);

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
            setLoading(true); // Start loading indicator
            const response = await axios.post('http://localhost:8001/todos', newTodo);
            setTodos([...todos, response.data]);
            inputRef.current.value = '';
            inputRef.current.focus();
        } catch (error) {
            console.error('Error adding new to-do:', error);
        } finally {
            setLoading(false); // Stop loading indicator
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
            setLoading(true); // Start loading indicator
            await axios.delete(`http://localhost:8001/todos/${id}`);
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error("Error deleting todo", error);
        } finally {
            setLoading(false); // Stop loading indicator
        }
    };

    // Filter todos based on the selected tab
    const filteredTodos = todos.filter(todo => {
        const matchesTitle = todo.title.toLowerCase().includes(filterTitle.toLowerCase());
        const matchesCompleted = !filterCompleted || todo.isComplete;
        return matchesTitle && matchesCompleted;
    });

    const todosToDisplay = filteredTodos.filter(todo => {
        if (selectedTab === 0) return true; // All todos
        if (selectedTab === 1) return !todo.isComplete; // Active todos
        if (selectedTab === 2) return todo.isComplete; // Completed todos
        return true;
    });

    const completedTodos = filteredTodos.filter(todo => todo.isComplete);
    const activeTodos = filteredTodos.filter(todo => !todo.isComplete);

    return (
        <>
            <div className="container">

                <h1>Todo List</h1>
                <Form addTodo={addTodo} />
                <Filter
                    filterTitle={filterTitle}
                    setFilterTitle={setFilterTitle}
                    filterCompleted={filterCompleted}
                    setFilterCompleted={setFilterCompleted}
                    todos={todos}
                    selectedTab={selectedTab} // Pass selectedTab to Filter
                    setSelectedTab={setSelectedTab} // Pass setSelectedTab to Filter
                />
                {loading ? (
                    <div style={{ width: 300 }}>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                    </div>
                ) : (
                    <List
                        todos={todosToDisplay} // Display todos based on selected tab
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
        </>
    );
}

export default HomePage;
