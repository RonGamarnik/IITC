import React, { useEffect, useState } from 'react';
import List from './components/TodoList';
import Statistics from './components/TodoStatistics';
import Form from './components/TodoForm';
import Filter from './components/Filter';
import axios from 'axios';

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

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterCompleted, setFilterCompleted] = useState(false);

  useEffect(() => {
    async function fetchTodos() {
      const initialTodos = await getTodosApi();
      setTodos(initialTodos);
    }
    fetchTodos();
  }, []);

  const addTodo = async (event, inputRef) => {
    event.preventDefault();

    const newTodoTitle = inputRef.current.value.trim();
    if (newTodoTitle === '') return;

    const newTodo = {
      title: newTodoTitle,
      isComplete: false,
    };

    try {
      const response = await fetch('http://localhost:8001/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) {
        throw new Error('Failed to add new to-do');
      }

      const createdTodo = await response.json();
      setTodos([...todos, createdTodo]);

      inputRef.current.value = '';
      inputRef.current.focus();
    } catch (error) {
      console.error('Error adding new to-do:', error);
    }
  };

  const toggleTodoComplete = async (id) => {
    const todo = todos.find(todo => todo.id === id);
    const updatedTodo = { ...todo, isComplete: !todo.isComplete };

    try {
      await axios.patch(`http://localhost:8001/todos/${id}`, { isComplete: updatedTodo.isComplete });
      setTodos(todos.map(todo =>
        todo.id === id ? updatedTodo : todo
      ));
    } catch (error) {
      console.error("Error updating todo", error);
    }
  };

  const removeTodo = async (id) => {
    console.log(`Attempting to delete todo with ID: ${id}`);
    try {
      await axios.delete(`http://localhost:8001/todos/${id}`);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error("Error in delete", error);
    }
  };

  const filteredTodos = todos.filter(todo => {
    const matchesTitle = todo.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesCompleted = !filterCompleted || todo.isComplete;
    return matchesTitle && matchesCompleted;
  });

  const completedTodos = filteredTodos.filter((todo) => todo.isComplete).length;
  const activeTodos = filteredTodos.length - completedTodos;

  return (
    <div className="container">
      <h1>Todo List</h1>
      <Form addTodo={addTodo} />
      <Filter
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        filterCompleted={filterCompleted}
        setFilterCompleted={setFilterCompleted}
      />
      <List
        todos={filteredTodos}
        toggleTodoComplete={toggleTodoComplete}
        removeTodo={removeTodo}
      />
      <Statistics
        todos={filteredTodos}
        activeTodos={activeTodos}
        completedTodos={completedTodos}
      />
    </div>
  );
}

export default TodoApp;
