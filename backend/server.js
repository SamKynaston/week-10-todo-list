require("dotenv").config()

//Express
const express = require("express") 
const app = express() // API

//Models
const User = require("./services/models/user")
const ToDo = require("./services/models/todo")

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const syncTables = () => {
    User.hasMany(ToDo);
    ToDo.belongsTo(User);

    User.sync({alter:true});
    ToDo.sync({alter:true})
}

//Routes
const UserRoutes = require("./routes/users")
const ToDoRoutes = require("./routes/todos")

//Configure Routes
app.use("/user", UserRoutes)
app.use("/todo", ToDoRoutes)

//Configure the Port
const port = process.env.port

//Configure Server
app.listen(port, () => {
    syncTables() //Sync SQL Tables
    console.log(`[LISTENING] localhost:${process.env.PORT}`);
})