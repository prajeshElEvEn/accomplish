const { Router } = require('express')

const taskRouter = Router()

taskRouter.get('/task', getTask)
