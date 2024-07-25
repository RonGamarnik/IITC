import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getBookById() {
            try {
                const response = await axios.get(`http://localhost:3000/api/books/${id}`);
                setBook(response.data);
            } catch (err) {
                setError(err.message);
            }
        }
        getBookById();
    }, [id]);

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!book) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.description}</p>
        </div>
    );
}

export default BookDetail;
