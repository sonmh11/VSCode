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

app.get('/', (request, response)=>{    //test
    response.sendFile("C:/VSCODE/js2/b/home.html")
})

app.get('/home', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/home.html")
})

app.get('/css/home.css', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/home.css")
})

app.get('/myPage', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/userPage.html")
})

app.get('/adminPage', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/adminPage.html")
})

app.get('/gymMasterPage', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/gymMasterPage.html")
})

app.get('/registerPage', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/registerPage.html")
})

app.get('/member_sign2', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/member_sign2.html")
})

app.get('/gymMaster', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/gymMaster.html")
})

app.get('/allaccount', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/memberselect2.html")
})

app.get('/gymMasterResist', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/permit.html")
})

app.get('/member_delete', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/member_delete.html")
})

app.get('/user_review', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/reviewer.html")
})

app.get('/map', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/map.html")
})

app.get('/map_click',(request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/map_click.html")
})

app.get('/review_delete', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/review_delete.html")
})

app.get('/change_review', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/change.html")
})

app.get('/reservation', (request, response)=>{
    response.sendFile("C:/VSCODE/js2/b/rev.html")
})

app.get('/css/map_click.css',(request, response)=>{
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

app.get('/js/star.js',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/star.js")
})

app.get('/css/star.css',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/star.css")
})

app.get('/star_png',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/img/starrate.png")
})

app.get('/img/home.png',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/img/home.png")
})

app.get('/img/back.png',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/img/back.png")
})

app.get('/img/search.png',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/img/search.png")
})

app.get('/modal',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/modal.html")
})

app.listen(8080,()=>{
    console.log('server Start at 8080')
})

app.get('/userReservation',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/b/userReservation.html")
})

app.get('/adminReservationCheck',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/b/adminReservationCheck.html")
})

app.get('/allGymMaster',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/b/allGymMaster.html")
})

app.get('/eventPage',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/b/eventPage.html")
})

app.get('/board',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/b/Starreview.html")
})

app.get('/gym_review',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/b/gymcheck.html")
})

app.get('/adminReviewDelete',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/b/adminReviewDelete.html")
})

app.get('/reservationCheck',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/b/reservationCheck.html")
})

app.get('/usercheck',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/b/usercheck.html")
})

app.get('/registerPage',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/b/registerPage.html")
})

app.get('/permit',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/b/permit.html")
})

app.get('/gymMaster',(request,response)=>{
    response.sendFile("C:/VSCODE/js2/b/gymMaster.html")
})