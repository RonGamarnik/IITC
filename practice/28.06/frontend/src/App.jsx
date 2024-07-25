import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page';
import BookDetail from './pages/bookDetail';
import { BookProvider } from './bookContext';

function App() {
    return (
        <BookProvider>
          
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/:id" element={<BookDetail />} />
                </Routes>
            
        </BookProvider>
    );
}

export default App;
