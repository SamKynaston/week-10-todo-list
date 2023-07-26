//Imports

//Models
const User = require("../services/models/user")
const ToDo = require("../services/models/todo")

const addActiveToDo = async (req, res) => {
    try {
        const newActiveToDo = ToDo.create(req.body)
        return res.status(201).json({message:"success", todo:newActiveToDo})
    } catch (err) {
        return res.status(501).json({errorResponse: {message:err.Message, error:err}})
    }
}

const deleteActiveToDo = async (req, res) => {
    try {
        return res.status(201).json({res:"HI!"})
    } catch (err) {
        return res.status(501).json({errorResponse: {message:err.Message, error:err}})
    }
}

const addDoneToDo = async (req, res) => {
    try {
        return res.status(201).json({res:"HI!"})
    } catch (err) {
        return res.status(501).json({errorResponse: {message:err.Message, error:err}})
    }
}

const deleteDoneToDo = async (req, res) => {
    try {
        return res.status(201).json({res:"HI!"})
    } catch (err) {
        return res.status(501).json({errorResponse: {message:err.Message, error:err}})
    }
}


module.exports = {addActiveToDo, deleteActiveToDo, addDoneToDo, deleteDoneToDo}