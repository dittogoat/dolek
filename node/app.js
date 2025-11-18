import express from 'express'

const app = express()

//localhost:67/?imie=cwel

app
    .get('/',(req,res) => {
        res.send('otwarto')

    })
    .get('/user',(req,res) => {
        //var message = req.query.imie != undefined ? 'Imie '+req.query.imie : ''
        //res.send(message)
        function dodaj(a,b){
            return a+b;
        }
        res.send(dodaj(1,2))

    })
    .listen(3000, ()=>{
        console.log('dziala')
    })