const mongoose=require('mongoose')
const shoesschema=new mongoose.Schema(
    {
    link1:{type:String},
    link2:{type:String},
    link3:{type:String},
    link4:{type:String},
    titre:{type:String},
    type:{type:String},
    description:{type:String},
    prix:{type:Number}
    }

)

module.exports=Shoes=mongoose.model("shoes",shoesschema)