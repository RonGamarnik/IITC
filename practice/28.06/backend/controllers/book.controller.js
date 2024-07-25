const { buildCriteria } = require("../helpers/book.helper");
const Book = require("../models/book.model");

async function getBooks(req, res) {
    const { query } = req;
    const criteria = buildCriteria(query);

    let page = parseInt(query.page) || 1;
    page = page < 1 ? 1 : page;

    const limit = parseInt(query.limit) || 6;
    const startIndex = (page - 1) * limit;
    try {
        const books = await Book.find(criteria).skip(startIndex).limit(limit);
        res.status(200).json(books);
    } catch (err) {
        console.error("Error while getting books:", err);
        res.status(500).json({ message: "Server error while getting books" });
    }
}

async function getBookById(req, res) {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (err) {
        if (err.name === "CastError") {
            console.error(`CastError: Book not found with id: ${id}`);
            return res.status(404).json({ message: "Book not found" });
        }
        console.error(`Error while getting book with id: ${id}`, err);
        res.status(500).json({ message: "Server error while getting book" });
    }
}


module.exports = {
    getBooks,
    getBookById,
};
