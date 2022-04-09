const express = require("express")
const router = express.Router()
const {registerIntoPanier,getpanier,deletearticle}=require("../controllers/panier.controller")

router.post('/registerPanier',registerIntoPanier)
router.get('/getpanier',getpanier)
router.delete('/:_id',deletearticle)

module.exports = router