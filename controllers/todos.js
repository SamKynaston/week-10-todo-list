//Imports

//Models
const User = require("../services/models/user")
const ToDo = require("../services/models/todo")

const addActiveToDo = async (req, res) => {
    try {
        const user = await User.findOne({
            where: req["authCheck"]
        })
        if (!req["authCheck"] || !user) { return res.status(401).json({message:"user not authorized"}) }

        req.body["UserId"] = user.id
        req.body["isActive"] = true
        const newActiveToDo = ToDo.create(req.body)

        return res.status(201).json({successResponse:{message:"success", todo:newActiveToDo}})
    } catch (err) {
        return res.status(501).json({errorResponse: {message:err.Message, error:err}})
    }
}

const deleteActiveToDo = async (req, res) => {
    try {
        if (!req["authCheck"]) { return res.status(401).json({message:"user not authorized"}) }
        
        const todo = await ToDo.findOne({
            where: req.body
        })

        if (!todo.UserId != req["authCheck"]["id"]) { return res.status(401).json({message:"user not authorized"}) }
        if (!todo) { return res.status(404).json({message:"todo not found"}) }

        todo.destroy()

        return res.status(204).json({message:"success"})
    } catch (err) {
        return res.status(501).json({errorResponse: {message:err.Message, error:err}})
    }
}

const addDoneToDo = async (req, res) => {
    try {
        const user = await User.findOne({
            where: req["authCheck"]
        })
        if (!req["authCheck"] || !user) { return res.status(401).json({message:"user not authorized"}) }

        req.body["UserId"] = user.id
        const newDoneToDo = ToDo.create(req.body)
        
        return res.status(201).json({successResponse:{message:"success", todo:newDoneToDo}})
    } catch (err) {
        return res.status(501).json({errorResponse: {message:err.Message, error:err}})
    }
}

const deleteDoneToDo = async (req, res) => {
    try {
        if (!req["authCheck"]) { return res.status(401).json({message:"user not authorized"}) }

        const todo = await ToDo.findOne({
            where: req.body
        })

        if (!todo) { return res.status(404).json({message:"todo not found"}) }
        if (!todo.UserId != req["authCheck"]["id"]) { return res.status(401).json({message:"user not authorized"}) }

        todo.destroy()

        return res.status(204).json({message:"success!"})
    } catch (err) {
        return res.status(501).json({errorResponse: {message:err.Message, error:err}})
    }
}


module.exports = {addActiveToDo, deleteActiveToDo, addDoneToDo, deleteDoneToDo}