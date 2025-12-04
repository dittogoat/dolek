import express from 'express'

const app = express()
const port = 4000;

app
.use(express.urlencoded({extended: true}))
.use((req,res,next)=>{
    console.log('method:', req.method);
    console.log('body:', req.body);
    next();
})

.post('/',(req,res)=>{
    res.send(req.body.test)
})


.get('/',(req,res)=>{
    let html = `<html>
        <form method='POST'>
            <input type='text' name='test'>
            <button type='submit'>Wyslij</button>
        </form></html>
    
    `
    res.send(html)
})

.listen(port,()=>{
    console.log('dziala')
})