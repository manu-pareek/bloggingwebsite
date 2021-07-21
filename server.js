import Connection from './database/db.js';
import router from './routes/route.js';
import express from 'express'
const  { Router }='express'
import bodyParser from 'body-parser';
const  { urlencoded }='body-parser'
import DotEnv from 'dotenv'
import cors from 'cors'
const app= express()
DotEnv.config()
app.use(cors())

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',router)
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
}
const PORT= process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log("Working Well")
})
const URL='mongodb+srv://user:user@blogwebsite.lmlij.mongodb.net/BLOG?retryWrites=true&w=majority'
Connection(process.env.MONGODB_URI || URL)