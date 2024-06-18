import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import './app.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import TodoPage from './pages/todo-page';
import NotFoundPage from './pages/NotFoundPage';
import CreateTodoPage from './pages/CreateTodoPage';
import TodoDetailsPage from './pages/TodoDetailsPage';


function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/Home' element={<HomePage />} />
        
        <Route path='/Todo' element={<TodoPage />}>
            <Route path='create' element={<CreateTodoPage />} />
           
        </Route>
        <Route path='/Todo/:id' element={<TodoDetailsPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
