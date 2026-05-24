const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const User = require("./models/User");




// Connect to the database
connectDB();

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});