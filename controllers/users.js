const User = require("../services/models/user");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        // const newUser = await User.create({
        //     username: req.body.username,
        //     email: req.body.email,
        //     password: req.body.password
        // })
        const  user= await User.create(req.body)
        res.status(201).json({
            message: `${req.body.username} succesfully added.`,
            user:{username:user.username, email:user.email}
        })
    } catch (error) {
        res.status(501).json({errorMessage: "Error whilst registering.", error: error});
    }
};

const login = async (req, res) => {
    try {
        // const userLogged = await User.findOne({
        //     where: {
        //         username: req.body.username
        //     }
        // })
        const token = await jwt.sign({id: req.user.id}, process.env.SECRET);
        console.log ("********* token = ", token)
        res.status(200).json ({
            message: "Login successful.",
            user: {
                username: req.user.username,
                email: req.user.email,
                token: token
            }
        })
    } catch (error) {
        res.status(501).json({errorMessage: "Error whilst logging in.", error: error});
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({})
        res.status (200).json({
            message: "All users found.",
            users:users
        })
    } catch (error) {
        res.status(501).json({errorMessage: "Error while getting all users.", error: error});
    }
};

const updateUser = async (req, res) => {
    try {
        const userUpdated = await User.update(
            {
                [req.body.updateKey]: req.body.updateValue
            },
            {
                where: {
                    username:req.body.username
                }
            }
        )
        res.status(201).json({message: `${req.body.username}'s ${req.body.updateKey} successfully updated to ${req.body.updateValue}.`, user: userUpdated});
    } catch (error) {
        res.status(501).json({errorMessage: "Error while updating user.", error: error});
    }
};

const deleteUser = async (req, res) => {
    try {
        const userDelete = await User.destroy({
            where: {
                username:req.body.username
            }
        });
        res.status(201).json({message: `${req.body.username} successfully removed.`, user:userDelete})
    } catch (error) {
        res.status(501).json({errorMessage: "Error while deleting user.", error: error});
    }
};

module.exports = {
    registerUser,
    getAllUsers,
    login,
    updateUser,
    deleteUser
}
