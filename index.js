const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./connect");
const TaskRoutes = require("./routes/TaskRoutes");

dotenv.config();

const app = express();
app.use(express.json());

// ✅ Define allowed origins correctly (no trailing slash)
const allowedOrigins = [
  "http://localhost:5173",                   // local React app
  "https://task-manager-roan-nine-13.vercel.app" // deployed frontend
];

// ✅ Single, clean CORS setup
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error("❌ Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.get("/", (req, res) => {
  res.send("Task Manager API is running...");
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// Routes
app.use("/api/tasks", TaskRoutes);
