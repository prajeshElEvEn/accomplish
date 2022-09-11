const { Router } = require('express')

const taskRouter = Router()

const { getTask, saveTask, deleteTask, updateTask } = require('../controllers/taskControllers')

taskRouter.get('/task', getTask)
taskRouter.post('/save', saveTask)
taskRouter.post('/delete', deleteTask)
taskRouter.post('/update', updateTask)

module.exports = taskRouter
