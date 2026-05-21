const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

// Connect to the database
connectDB();

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});