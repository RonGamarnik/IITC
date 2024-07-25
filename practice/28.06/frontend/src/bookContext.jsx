import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BookContext = createContext();

export function BookProvider({ children }) {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    async function getData() {
        try {
            const response = await axios.get("http://localhost:3000/api/books");
            setBooks(response.data);
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <BookContext.Provider value={{ books, error }}>
            {children}
        </BookContext.Provider>
    );
}

export function useBooks() {
    return useContext(BookContext);
}
