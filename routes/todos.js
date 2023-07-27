const {Router} = require("express")
const router = Router()

module.exports = router

//Functions
const { addActiveToDo, deleteActiveToDo, addDoneToDo, deleteDoneToDo } = require("../controllers/todos")

//Active ToDos
router.post("/active/add", addActiveToDo)
router.delete("/active/delete", deleteActiveToDo)

//Done ToDos
router.post("/done/add", addDoneToDo)
router.delete("/done/delete", deleteDoneToDo)