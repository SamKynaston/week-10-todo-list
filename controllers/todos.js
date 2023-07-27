//Imports

//Models
const User = require("../services/models/user")
const ToDo = require("../services/models/todo")

const addActiveToDo = async (req, res) => {
    try {
        req.body["isActive"] = true
        const newActiveToDo = ToDo.create(req.body)
        return res.status(201).json({successResponse:{message:"success", todo:newActiveToDo}})
    } catch (err) {
        return res.status(501).json({errorResponse: {message:err.Message, error:err}})
    }
}

const deleteActiveToDo = async (req, res) => {
    try {
        const todo = await ToDo.findOne({
            where: req.body
        })

        if (!todo) { return res.status(404).json({message:"todo not found"}) }

        todo.destroy()

        return res.status(204).json({message:"success"})
    } catch (err) {
        return res.status(501).json({errorResponse: {message:err.Message, error:err}})
    }
}

const addDoneToDo = async (req, res) => {
    try {
        const newDoneToDo = ToDo.create(req.body)
        return res.status(201).json({successResponse:{message:"success", todo:newDoneToDo}})
    } catch (err) {
        return res.status(501).json({errorResponse: {message:err.Message, error:err}})
    }
}

const deleteDoneToDo = async (req, res) => {
    try {
        const todo = await ToDo.findOne({
            where: req.body
        })

        if (!todo) { return res.status(404).json({message:"todo not found"}) }

        todo.destroy()

        return res.status(204).json({message:"success!"})
    } catch (err) {
        return res.status(501).json({errorResponse: {message:err.Message, error:err}})
    }
}


module.exports = {addActiveToDo, deleteActiveToDo, addDoneToDo, deleteDoneToDo}