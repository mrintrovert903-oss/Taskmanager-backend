const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./connect");
const TaskRoutes = require("./routes/TaskRoutes")

dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());
const allowedOrigins = [
  "http://localhost:3000",                    // local React app
  "https://task-manager-roan-nine-13.vercel.app/"     // your deployed Vercel URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.get('/',(req,res)=>{
    res.send('Task Manager API is running...')
})

connectDB();

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on ${PORT}`))

app.use('/api/tasks', TaskRoutes)