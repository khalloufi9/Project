const express = require("express")
const  {registeruser} = require("../controllers/user.controller")
const { registerRules, validator } = require("../middleware/validator")
const {userLogin}=require("../controllers/user.controller")
const router = express.Router()

const isAuth = require("../middleware/passport-setup")


router.post('/register',registerRules(), validator, registeruser)
router.post('/login',userLogin)
router.get('/currentUser', isAuth(), function (req, res){
    res.send(req.user)
})

module.exports = router