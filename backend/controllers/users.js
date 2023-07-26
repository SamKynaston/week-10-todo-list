

const User = require("../services/models/user")
const jwt = require("jsonwebtoken");

//Controller for register user
const registerUser = async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        res.status(201).json({
            message: `${req.body.username} succesfully added.`,
            user:{username:newUser.username, token:newUser.token}
        })
    } catch (error) {
        res.status(501).json({errorMessage: "Error whilst registering user.", error: error});
    }
};

//controller for logging in
const login = async (req, res) => {
    try {
        if(!req.header.Authorization){
        const loggedInUser =  await User.findOne({
            where: {
                username: req.body.username
            }
        })
        const token = await jwt.sign({id: loggedInUser.id}, process.env.SECRET);
        console.log ("********* token = ", token)
            res.status(201).json({
                message: "Logged in successfully.",
                user: {
                    username: loggedInUser.username,
                    token: token
                },
                activeToDos:{
                    id: loggedInUser.activeToDo.id,
                    toDo: loggedInUser.activeToDo.toDo
                },
                doneToDos:{
                    id: loggedInUser.activeToDo.id,
                    toDo: loggedInUser.activeToDo.toDo
                }
            })
        } else {
            const loggedInUser =  await User.findOne({
                where: {
                    username: req.body.username
                }
            })
                res.status(201).json({
                    message: "Logged in successfully.",
                    user: {
                        username: loggedInUser.username,
                        token: token
                    },
                    activeToDos:{
                        id: loggedInUser.activeToDo.id,
                        toDo: loggedInUser.activeToDo.toDo
                    },
                    doneToDos:{
                        id: loggedInUser.activeToDo.id,
                        toDo: loggedInUser.activeToDo.toDo
                    }
                })
        }
    } catch (error) {
        res.status(501).json({errorMessage: "Error whilst logging in.", error: error});
    }
}