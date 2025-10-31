const express = require('express')
const TaskController = require('../controller/TaskController')

const router = express.Router();

router.post('/', TaskController.createTask);
router.get('/',TaskController.getTasks);
router.put('/:id', TaskController.updateTasks);
router.delete('/:id',TaskController.deleteTasks);

module.exports = router