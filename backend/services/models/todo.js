const {DataTypes} = require("sequelize")
const database = require("../database")

const Todo = database.define("todo", {
    message: {type:DataTypes.STRING, allowNull:false},
    isActive: {type:DataTypes.BOOLEAN, allowNull:false},
    author: {type:DataTypes.INTEGER, allowNull:false}
})

module.exports = Todo