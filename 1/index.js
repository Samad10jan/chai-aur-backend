// console.log("chai or code");
require('dotenv').config()
const express = require('express')
// import express from "express" same

const app = express() // all functinality of express

// const port = 3000 // open in your computer

// get request on "/" and req, res
app.get('/', (req, res) => {
  res.send('Hello World!') //sending string
})

//
app.get('/twitter',(req,res)=>{
    res.send('username') 
})

// HotReLoading?
// when implement new thing during running server , it will not show untill you restart your sever " npm run start"
app.get('/login',(req,res)=>{
    res.send('<h1>ABDUL</h1>') //sending tag, show in bold large letter 
})
app.get('/getData', (req, res) => {
  res.json({}) //sending string
})

// listen
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
// Deploy:
// digital ocean
// seenode
// render
// cyclic


//setps
/*
npm init
npm install express

package.json ->  "start": "node index.js"

*/