const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/book.route");
const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();

async function main() {
    await connectDB(); // Connect to the database

    app.use(express.json());

    // Allow CORS for local development (configure it properly for production)
    app.use(
        cors({
            origin: "http://localhost:5173",
        })
    );

    // Routes
    app.use("/api/books", bookRoutes);

    // Start server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

main();
