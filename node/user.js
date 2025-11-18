import express from 'express'

const app = express()


app.get('/',(req,res) => {
    var text = req.query.test ?? undefined;
    if (text=='gej') {
        res.send('ej tak nie piszemy')
    } else {
        res.send(text)
    }
}).listen(3000, ()=>{
    console.log('test')
})