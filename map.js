const express=require('express')
const fs=require('fs')
const app=express()
const bodyparser=require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public'))
//app.set('view engine',ejs)

app.get('/a', (request, response)=>{    //test
    response.sendFile("C:/VSCODE/js2/a.html")
})

app.get('/home', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/home.html")
    //response.sendFile("C:/VSCODE/js2/a.html")
})

app.get('/map', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/map.html")
})

app.get('/map_click',(request, response)=>{
    response.sendFile("C:/VSCODE/js2/map_click.html")
})

app.get('/map_click_css',(request, response)=>{
    response.sendFile("C:/VSCODE/js2/map_click.css")
})

app.get('/gym_data',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/gym_data.json")
})

app.get('/test_data',(request,response)=>{  //test
    response.sendFile("C:/VSCODE/js2/test_data.json")
})

app.get('/star',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/star.html")
})

app.get('/star_js',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/star.js")
})

app.get('/star_css',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/star.css")
})

app.get('/star_png',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/img/starrate.png")
})

app.get('/home_png',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/img/home.png")
})

app.listen(8080,()=>{
    console.log('server Start at 8080')
})