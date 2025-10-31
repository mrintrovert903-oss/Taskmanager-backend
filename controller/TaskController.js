const TaskModel = require("../model/TaskModel");

const createTask = async(req,res) => {
    const task = TaskModel.create(req.body)
    res.status(201).json(task)
}

const getTasks = async(req,res) => {
    const tasks = await TaskModel.find();
    res.json(tasks)
}

const updateTasks = async(req,res) => {
    const task = await TaskModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.json(task)
}

const deleteTasks = async (req, res) => {
  try {
    await TaskModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};
module.exports = {createTask, getTasks, updateTasks, deleteTasks}