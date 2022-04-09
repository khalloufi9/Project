const Shoes=require('../models/shoes')

//register women
exports.registershoes = async(req,res)=>{
    const shoes={...req.body}
    
        
        try {
            const newshoes = await new Shoes({ ...shoes })
            await newshoes.save()
            res.status(200).json({ msg: "shoes added successfuly" })
        } catch (error) {
            console.log(error)
            res.status(401).json({ msg: "shoes register failed" })
        }
    }
//get all shoes women
    exports.getallshoes = async(req,res)=>{
        
        Shoes.find()
        .then(shoes => res.status(200).json(shoes))
        .catch(err => res.status(400).json(err))
    }
//get by id women

exports.getshoesbyid = async(req,res)=>{
        
    let {_id}=req.params
    Shoes.find({_id})
    .then(shoes => res.status(200).json(shoes))
    .catch(err => res.status(400).json(err))
}
//get shoes by type
exports.getshoesbytype= async(req,res)=>{
        
    let {type}=req.body
    console.log(req.body)
    Shoes.find({type})
    .then(shoes => res.status(200).json(shoes))
    .catch(err => res.status(400).json(err))
}




