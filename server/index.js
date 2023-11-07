const express = require("express")
const app=express()
const path=require("path")

app.use(express.json())

app.use(express.urlencoded())

app.use(express.static('Public')) // maybe index instead of public


// get route
app.get("/form",(req,res)=>{
    // input login file
    res.sendFile(__dirname +"/index/login.html")
});

app.post('/formPost',(res,req)=>{
    console.log(req.body);


})










// port
app.listen(5500,()=>{
    console.log("Server is running...")
})