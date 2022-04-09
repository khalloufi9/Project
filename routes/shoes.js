const express = require("express")
const {registershoes,getallshoes,getshoesbyid,getshoesbytype} =require("../controllers/shoes.controller")
const router = express.Router()



router.post('/registershoes',registershoes)
router.get('/getallshoes',getallshoes)
router.get('/getshoesbytype',getshoesbytype)

router.get('/:_id',getshoesbyid)

module.exports = router