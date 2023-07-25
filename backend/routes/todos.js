const {Router} = require("express")
const router = Router()

module.exports = router

//Active ToDos
router.post("/active")
router.delete("/active")

//Done ToDos
router.post("/done")
router.delete("/done")