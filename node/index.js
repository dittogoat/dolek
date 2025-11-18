import express from 'express'

const app = express()

app
    .get('/',(req,res)=>{
        res.send('xd');
    })
    .get('/user',(req,res)=> {
        res.send('xd2')
    })
    .listen(3000, ()=>{
        console.log('port 3000')
    })


class User {
    setName = function(name) {
        this.name = name;
    }
    setLastName = lastName => this.lastName = lastName;
}

var user = new User()
user.setName('Jacek') // user.name = 'Jacek'
user.setLastName('Mak') // window.lastName = 'Mak'

var liczba=[2,33,2131]

const dodaj = (...liczba) => {
    var w = 0
    for (l in liczba) {
        w+=l
    }
    return w
}