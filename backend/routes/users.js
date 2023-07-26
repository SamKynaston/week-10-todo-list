const {Router} = require("express")
const router = Router()
const { registerUser, login } = require("../controllers/users")


router.post("/users/register", hashPass, registerUser); //hashPass needs to include creating a token as this needs to be output in the register user success code as per the brief.
router.post("/users/login", otherFunction, login); // otherFunction needs to check for a token and either check the token (checkToken), or compare the password with the hashed one (comparePass)


module.exports = router