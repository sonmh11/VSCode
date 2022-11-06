const express=require('express')
const fs=require('fs')
const app=express()
const bodyparser = require('body-parser')
app.use(express.static('public'))

app.get('/', (request, response)=>{
    response.sendFile("c:/VSCODE/js2/map.html")
})

app.listen(52273,()=>{
    console.log('server Start')
})