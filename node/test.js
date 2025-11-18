import express from 'express'

const app = express()
const port = 3000;

app.get('/',(req,res)=>{
    res.send(req.query.test ?? 'nie ma')
}).listen(port,()=>{
    console.log('gut')
})