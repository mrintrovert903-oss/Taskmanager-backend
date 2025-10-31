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

app.get('/',(req,res)=>{
    res.send('Task Manager API is running...')
})

connectDB();

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on ${PORT}`))

app.use('/api/tasks', TaskRoutes)