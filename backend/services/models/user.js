const {DataTypes} = require("sequelize")
const database = require("../database")

const Model = database.define("todo", {
    username: {type:DataTypes.STRING, allowNull:false, unique:true},
    email: {type:DataTypes.STRING, allowNull:false, unique:true},
    password: {type:DataTypes.STRING, allowNull:false},
})

module.exports = User