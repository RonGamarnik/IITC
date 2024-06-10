import React, { useState } from 'react';
const initialTodos = [{ id: '1', title: 'Learn React', isComplete: false },
{ id: '2', title: 'Build a Todo App', isComplete: false },
{ id: '3', title: 'Read JavaScript Documentation', isComplete: true },
{ id: '4', title: 'Write Unit Tests', isComplete: false },
{ id: '5', title: 'Implement Context', isComplete: true },
{ id: '6', title: 'Create Portfolio Website', isComplete: false },
{ id: '7', title: 'Learn TypeScript', isComplete: false },
{ id: '8', title: 'Refactor Codebase', isComplete: true },
{ id: '9', title: 'Optimize Performance', isComplete: false },
{ id: '10', title: 'Deploy to Production', isComplete: true }
]
function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    if (newTodoTitle.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      title: newTodoTitle,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
  };

  const toggleTodoComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedTodos = todos.filter((todo) => todo.isComplete).length;
  const activeTodos = todos.length - completedTodos;

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodoTitle}
          onChange={(ev) => setNewTodoTitle(ev.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todoItem">
            <p className={todo.isComplete ? 'completedTodo' : ''}>{todo.title}</p>
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => toggleTodoComplete(todo.id)}
            />
            <button onClick={() => removeTodo(todo.id)}>Remove todo</button>
          </li>
        ))}
      </ul>
      <p>Total todos: {todos.length}</p>
      <p>Active todos: {activeTodos}</p>
      <p>Completed todos: {completedTodos}</p>
      <label>Todo progress: </label>
      <progress value={completedTodos} max={todos.length}></progress>
    </div>
  );
}

export default TodoApp;
