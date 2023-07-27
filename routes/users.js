const {Router} = require("express");
const {registerUser, login, getAllUsers, updateUser, deleteUser} = require("../controllers/users");
const {hashPass, checkPass, checkToken} = require("../middleware")

const userRouter = Router()

userRouter.post("/users/register", hashPass, registerUser);
userRouter.post("/users/login", checkPass, login);
userRouter.get("/users/getAllUsers", checkToken, getAllUsers);
userRouter.get("/users/authCheck");
userRouter.put("/users/updateUser", checkToken, updateUser);
userRouter.delete("/users/deleteUser", checkToken, deleteUser)

module.exports = userRouter