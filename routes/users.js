const {Router} = require("express");
const {registerUser, login, getAllUsers, updateUser, deleteUser} = require("../controllers/users");
const {hashPass, authenticatePassword, authenticateToken} = require("../middleware")

const userRouter = Router()

userRouter.post("/register", hashPass, registerUser);
userRouter.post("/login", authenticatePassword, login);
userRouter.get("/users/authcheck");

module.exports = userRouter