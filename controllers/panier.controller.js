const   Panier=require('../models/panier')

//enregistrer 
exports.registerIntoPanier = async(req,res)=>{
    const panier={...req.body}
    
        
        try {
            const newpanier = await new Panier({ ...panier })
            await newpanier.save()
            res.status(200).json({ msg: "shoes added successfuly into bag" })
        } catch (error) {
            console.log(error)
            res.status(401).json({ msg: "shoes register failed into bag" })
        }
    }
//get panier
    exports.getpanier = async(req,res)=>{
        
        Panier.find()
        .then(panier => res.status(200).json(panier))
        .catch(err => res.status(400).json(err))
    }

//delete article
exports.deletearticle = async(req,res)=>{
    let {_id}=req.params
    Panier.findByIdAndDelete({_id})
    .then(()=>res.send("shoes has been deleted"))
    .catch(err => res.status(400).json(err))
}