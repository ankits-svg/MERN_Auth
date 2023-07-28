const express=require('express');
const { authRouter } = require('./routes/auth.routes');
const { connection } = require('./config/db');
const app=express()
require('dotenv').config()
// console.log(process.env.port)
const port=process.env.port || 5000;
app.use(express.json())

app.use("/auth",authRouter)


app.listen(port,async()=>{
    try {
        await connection;
        console.log("Index.js connected to mongo")
    } catch (error) {
        console.log("Cannot connected to index.js to mongodb")
        console.log(error)
    }
    console.log(`server is running at ${port}`);
})