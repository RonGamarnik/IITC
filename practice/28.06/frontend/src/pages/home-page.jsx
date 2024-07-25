import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useBooks } from '../bookContext';

function HomePage() {
    const { books, error } = useBooks();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    
    // Extract genres from the books data
    const genres = Array.from(new Set(books.flatMap(book => book.genre)));

    const selectedGenres = searchParams.getAll("genre");

    const handleCheckboxChange = (genre) => {
        const newSelectedGenres = selectedGenres.includes(genre)
            ? selectedGenres.filter(g => g !== genre)
            : [...selectedGenres, genre];
        setSearchParams({ genre: newSelectedGenres });
    };

    const filteredBooks = selectedGenres.length
        ? books.filter(book => book.genre.some(g => selectedGenres.includes(g)))
        : books;

    return (
        <div>
            {error && <p>Error: {error}</p>}

            <div>
                <h3>Filter by Genre</h3>
                {genres.map(genre => (
                    <div key={genre}>
                        <input 
                            type="checkbox"
                            id={genre}
                            value={genre}
                            checked={selectedGenres.includes(genre)}
                            onChange={() => handleCheckboxChange(genre)}
                        />
                        <label htmlFor={genre}>{genre}</label>
                    </div>
                ))}
            </div>
                <div className=' flex gap-8 flex-wrap justify-center bg-slate-100 py-20 transition-all'>
            {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                    <div onClick={() => navigate(`/${book._id}`)} key={book._id} className=' border transition-all p-8 border-blue-300 rounded max-w-fit cursor-pointer hover:bg-slate-500 hover:scale-110'>
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        <p>{book.genre.join(', ')}</p>
                    </div>
                ))
            ) : (
                <p>No books found</p>
                )}
                </div>
        </div>
    );
}

export default HomePage;
