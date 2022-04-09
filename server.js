
require ('dotenv').config()
const express=require ('express')
const ConnectDB=require('./config/connectDB')
const user=require('./routes/user')
const shoes=require('./routes/shoes')
const passport = require('passport')
const app=express()
const cors =require ('cors')
const panier=require('./routes/panier')


app.use(cors())

app.use(express.json())

app.use(passport.initialize())



app.use("/user", user)
app.use("/shoes",shoes)
app.use("/panier",panier)

// app.get('/', (req, res)=>{
//     res.send("hello")
// })




ConnectDB()


const port=process.env.PORT||process.env.port1

app.listen(port,err=>
    err ? console.log("server connection failed",err)
        : console.log(`server is running on port ${port}`)

    )
