const mongoose=require('mongoose')
const panierschema=new mongoose.Schema(
    {
    link1:{type:String},
    titre:{type:String},
    description:{type:String},
    prix:{type:Number},
    prixpromo:{type:Number},
    taille:{type:Number}
    }

)

module.exports=Panier=mongoose.model("panier",panierschema)