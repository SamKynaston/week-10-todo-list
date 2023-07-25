const {DataTypes} = require("sequelize")
const database = require("../database")

<<<<<<< HEAD
const Todo = database.define("todo", {
=======
const ToDo = database.define("todo", {
>>>>>>> 0717c26ee8565b5ce616945799411b835a7dd51e
    message: {type:DataTypes.STRING, allowNull:false},
    isActive: {type:DataTypes.BOOLEAN, allowNull:false},
    author: {type:DataTypes.INTEGER, allowNull:false}
})

<<<<<<< HEAD
module.exports = Todo
=======
module.exports = ToDo
>>>>>>> 0717c26ee8565b5ce616945799411b835a7dd51e
