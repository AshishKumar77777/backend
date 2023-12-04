const express=require('express')
require('dotenv').config()
const app=express()
const port=4000
app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/login',(req,res)=>{
    res.send('HI guys, Login')
})
app.get('/twitter',(req,res)=>{
    res.send('<h1> Hi mai hu ashish <h1>')
})
app.get('/coder',(req,res)=>{
    res.send('<h2> mai aisa hi hu</h2>')
})
app.listen(process.env,()=>{
    console.log(`App is listening on port number ${port}`)
})