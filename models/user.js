const mongoose=require('mongoose')
const userschema=new mongoose.Schema(
    {
    fullName:{type:String},
    email:{type:String},
    phone:{type:Number},
    ville:{type:String},
    adresse:{type:String},
    codepostal:{type:String},
    password:{type:String}

    }

)

module.exports=User=mongoose.model("users",userschema)