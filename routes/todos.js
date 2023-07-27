const {Router} = require("express")
const router = Router()

module.exports = router

//Functions
const { addActiveToDo, deleteActiveToDo, addDoneToDo, deleteDoneToDo } = require("../controllers/todos")
const { authenticateToken } = require("../middleware/index")

//Active ToDos
router.post("/active/add", authenticateToken, addActiveToDo)
router.delete("/active/delete", authenticateToken, deleteActiveToDo)

//Done ToDos
router.post("/done/add", authenticateToken, addDoneToDo)
router.delete("/done/delete", authenticateToken, deleteDoneToDo)