const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Book = require("./models/book.model");

dotenv.config();

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: ["Classic", "Fiction"],
        description: "A novel about the serious issues of rape and racial inequality."
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: ["Dystopian", "Science Fiction"],
        description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism."
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville",
        genre: ["Adventure", "Classic"],
        description: "The narrative of Captain Ahab's obsessive quest to seek revenge on the white whale."
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: ["Romance", "Classic"],
        description: "A romantic novel that charts the emotional development of the protagonist Elizabeth Bennet."
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: ["Classic", "Fiction"],
        description: "A novel about the American dream and the roaring twenties."
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        genre: ["Historical Fiction", "Classic"],
        description: "A novel that chronicles the history of the French invasion of Russia."
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: ["Fiction", "Classic"],
        description: "A story about teenage angst and alienation."
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        genre: ["Psychological Fiction", "Classic"],
        description: "A novel about the mental anguish and moral dilemmas of an impoverished ex-student who kills a pawnbroker."
    },
    {
        title: "The Odyssey",
        author: "Homer",
        genre: ["Epic", "Classic"],
        description: "An epic poem about the journey of Odysseus back to his home after the fall of Troy."
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: ["Fantasy", "Adventure"],
        description: "A children's fantasy novel about the adventures of Bilbo Baggins."
    },
];

async function seedDB() {
    await connectDB();
    try {
        await Book.deleteMany({});
        await Book.insertMany(books);
        console.log("Database seeded");
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.connection.close();
    }
}

seedDB();
