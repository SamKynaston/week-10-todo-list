const User = require("../users/model")
const jwt = require("jsonwebtoken")

const bcrypt = require("bcrypt")

const saltRounds = process.env.SALT_ROUNDS

const hashPass = async (req, res, next) => {
    try {
        console.log("hashPass middleware")
        req.body.password = await bcrypt.hash(req.body.password, parseInt(saltRounds))
        next()
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error:error})
    }
}

const checkPass = async (req, res, next) => {
    try { 
        const userPass = await User.findOne({
            where: {
                username: req.body.username
            }
        })
        bcrypt.compare(req.body.password, userPass.password).then(console.log(res));
        next();
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error});
        console.log(error);
    }
}

const tokenCheck = async function(req, res, next) {
    request.post(
      `https://${ process.env.SUBDOMAIN }.onelogin.com/oidc/2/token/introspection`,   
      {
      'form': {
        'token': req.session.accessToken,
        'token_type_hint': 'access_token',
        'client_id': process.env.MY_SQL_URI,
        'client_secret': process.env.SECRET
      }
    },function(err, response, body){
      var token = JSON.parse(body);
      var tokenValid = false;
  
      var clientIdValid = token.client_id === process.env.MY_SQL_URI;
  
      console.log(token.client_id)
      console.log(process.env.MY_SQL_URI)

      var currentTimestamp = new Date().getTime() / 1000;
      var tokenIsNotExpired = token.exp > currentTimestamp;
  
      tokenValid = clientIdValid && tokenIsNotExpired
    });
  };

console.log("why wont you commit?")

module.exports = {
    hashPass,
    checkPass
}