 import express from "express"

 const app=express()

 app.set('views','./views')
 app.set('view engine','ejs')

 app.get('/powitanie',(req,res)=>{
   
 })
 app.get('/przedmioty',(req,res)=>{
   let lista=['Matma','polski','angielski','niemiecki']
    res.render('index',{obiekt:lista},(err,html)=>{
      if(err){
         console.log(err)
      }
        res.send(html)
    })

    
 }).listen(3000,()=>{
    console.log("log")
 })