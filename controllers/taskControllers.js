const taskModel = require('../models/taskModel')

module.exports.getTask = async (req, res) => {
    const task = await taskModel.find()
    res.send(task)
}

module.exports.saveTask = async (req, res) => {
    const { title, description } = req.body
    taskModel
        .create({
            title,
            description
        })
        .then(() => {
            res.set(200).send('[*] Task saved')
        })
        .catch((error) => {
            console.log('[-] Error encountered!\n', error)
        })
}

module.exports.deleteTask = async (req, res) => {
    const { _id } = req.body

    taskModel
        .findByIdAndDelete(id)
        .then(() => {
            res.set(200).send('[*] Task deleted')
        })
        .catch((error) => {
            console.log('[-] Error encountered!\n', error)
        })
}

module.exports.updateTask = async (req, res) => {
    const { _id, title, description } = req.body

    taskModel
        .findByIdAndUpdate(id, {
            title,
            description
        })
        .then(() => {
            res.set(200).send('[*] Task updated')
        })
        .catch((error) => {
            console.log('[-] Error encountered!\n', error)
        })
}
