const User=require('../models/user')
const  bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.registeruser = async(req,res)=>{
    const user={...req.body}
    
        const newuser=  await new User ({...user})
        const email=newuser.email
        const searchmail= await User.findOne({email})
        if (searchmail) return res.status(403).json({msg: "email already exist"})
       
        try {
            const newUser = await new User({ ...user })
    
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(newUser.password, salt)
    
            newUser.password = hash
            await newUser.save()
            res.status(200).json({ msg: "User added successfuly" })
        } catch (error) {
            console.log(error)
            res.status(401).json({ msg: "User register failed" })
        }
    }


exports.userLogin=async(req,res)=>{
    const {email,password}=req.body
    console.log(email)
    
   const search= await User.findOne({email})
    

    if (!search) return res.status(403).json({msg:"Email not  already exists "})
    console.log(password)
    console.log(search.password)
    const isMatch= await bcrypt.compare(password,search.password)
    if(!isMatch) return  res.status(404).json({msg:"bad credentiel"})
    
    const payload = {
        id: search._id,
        email: search.email,
        fullName: search.fullName,
        phone: search.phone
    }
     
   
    try {
        
        const token = await jwt.sign(payload, process.env.secretOrKey)
        res.status(200).json({ msg: "Login with success", token: `Bearer ${token}` })
    } catch (error) {
        res.status(401).json({ msg: "Login failed" })
    }
}
