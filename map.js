const express=require('express')
const fs=require('fs')
const app=express()
const bodyparser=require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public'))
//app.set('view engine',ejs)

app.get('/', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/map.html")
    //response.sendFile("C:/VSCODE/js2/c.html")
})

app.get('/map_click',(request, response)=>{
    response.sendFile("C:/VSCODE/js2/map_click.html")
})

app.get('/gym_data',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/gym_data.json")
})

app.get('/star',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/star.html")
})

app.listen(52273,()=>{
    console.log('server Start')
})