const express = require('express')
const app= express()
const port= 3001

app.get('/', (req, res)=>{
    console.log("Inside app.get")
})

app.listen(port, (req, res)=>{
    console.log("Inside app.listen")
})