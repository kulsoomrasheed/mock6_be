const express= require('express')
const cors= require('cors')
const app = express()
app.use(cors())
require('dotenv').config()
const { connection } = require('./db')
const { userRouter } = require('./routes/user.routes')
const {  blogPostRouter } = require('./routes/blog.routes')


app.get("/",(req,res)=>{
    res.json({msg:"success"})
})
app.use(express.json())
app.use("/api",userRouter)
app.use("/api/blogs",blogPostRouter)
app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log(`listening on port ${process.env.port}`);

    }catch(e){
console.log(e);
    }
})