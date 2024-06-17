import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import './app.css';
import ResponsiveAppBar from './components/NavBar';
import TodoPage from './pages/todo-page';
import NotFoundPage from './pages/NotFoundPage';
import CreateTodoPage from './pages/CreateTodoPage';
import TodoDetailsPage from './pages/TodoDetailsPage';

function App() {
  return (
    <>
      <ResponsiveAppBar className="app-bar" sx={{ width: 100 }} />
      <Routes>
        <Route path='/Home' element={<HomePage />} />
        <Route path='/Todo' element={<TodoPage />} />
        <Route path='/Create todo' element={<CreateTodoPage  />} />
        <Route path='/Todo/:id' element={<TodoDetailsPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
