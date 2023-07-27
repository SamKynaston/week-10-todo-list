const {Router} = require("express");
const {registerUser, login, getAllUsers, updateUser, deleteUser} = require("../controllers/users");
const {hashPass, authenticatePassword, authenticateToken} = require("../middleware")

const userRouter = Router()

userRouter.post("/users/register", hashPass, registerUser);
userRouter.post("/users/login", authenticatePassword, login);
userRouter.get("/users/getAllUsers", authenticateToken, getAllUsers);
userRouter.get("/users/authCheck");
userRouter.put("/users/updateUser", authenticateToken, updateUser);
userRouter.delete("/users/deleteUser", authenticateToken, deleteUser)

module.exports = userRouter