import express, { urlencoded } from 'express'

const app = express()
const port = 4000;

app.use(urlencoded({extended: true}))
app.use((req,res,next)=>{
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

class Uczen {
    static ID = 1
    constructor(nazwa,profil){
        this.id = Uczen.ID
        this.nazwa = nazwa
        this.profil = profil
        Uczen.ID++;
    }
}

let listaUczniow = [
    new Uczen("Daniel","Cwe"),
    new Uczen("Dzandzej","L")
];

const RouterUczniowie = express.Router()

RouterUczniowie
.get('/list',(req,res)=>{
    listaUczniow.forEach(element => {
        res.write(`${element.nazwa} `) 
    });
    res.end()
})
.get('/details/:id',(req,res)=>{
    let empty = true
    for (let index = 0; index < listaUczniow.length; index++) {
        const element = listaUczniow[index];
        if (element.id == req.params.id){
            res.write(`ID: ${element.id}\n`)
            res.write(`Nazwa: ${element.nazwa}\n`)
            res.write(`Profil: ${element.profil}\n`)
            empty = false
        }
    }
    if (empty) {res.write('Nie poprawne id')}
    res.end()
})
.get('/add',(req,res)=>{
    let html = `
        <form action="" method="POST">
            Nazwa <input name='nazwa'> <br>
            Profil <input name='profil'> <br>
            <button type='submit'>Wyslij</button>
        </form>
    
    `
    res.send(html)
    
})
.post('/add',(req,res)=>{
    let nazwa = req.body.nazwa
    let profil = req.body.profil
    listaUczniow.push(new Uczen(nazwa,profil))
    res.send(`Dodano ucznia ${nazwa} o profilu ${profil}`)
    
})
.get('/update/:id',(req,res)=>{
    let empty = false;
    for (let index = 0; index < listaUczniow.length; index++) {
        const element = listaUczniow[index];
        if (element.id == req.params.id){
            res.write(`ID: ${element.id}\n`)
            res.write(`Nazwa: ${element.nazwa}\n`)
            res.write(`Profil: ${element.profil}\n`)
            empty = true
            break
        }
    }
    if (empty) {
        let html = `<html>
        <form action="" method="POST">
            Nazwa <input name='nazwa'> <br>
            Profil <input name='profil'> <br>
            <button type='submit'>Wyslij</button>
        </form></html>
    
    `
    res.write(html)
    }
    res.end()


    
})
.post('/update/:id',(req,res)=>{
    res.write('Zaktualizowano dane')
    for (let index = 0; index < listaUczniow.length; index++) {
        const element = listaUczniow[index];
        if(element.id == req.params.id){
            element.nazwa = req.body.nazwa
            element.profil = req.body.profil
            break
        }
        
    }
    res.end()

    
})
.get('/delete/:id',(req,res)=>{
    let empty = true
    for (let index = 0; index < listaUczniow.length; index++) {
        const element = listaUczniow[index];
        if (req.params.id == element.id){
            listaUczniow.remove(element)
            empty = false
            break
        }
        
    }
    if (empty){
        res.send('Nie ma takiego ucznia')
    } else {
        res.send('Usunięto ucznia')
    }
})


app.use('/uczniowie',RouterUczniowie)

app.listen(port,()=>{
    console.log('dziala')
})


/* Zadanie 3
Wypełnij routingi kodem
- get /uczniowie/list - wypisz listę uczniów
- get /uczniowie/details/:id - wypisz szczegóły ucznia
- get /uczniowie/add - wypisz formularz dodawania ucznia
- post /uczniowie/add - stwórz obiekt na bazie klasy Uczen z przesłanymi danymi i dodaj do listaUczniow
- get /uczniowie/update/:id - wypisz formularz aktualizacji ucznia
- post /uczniowie/update - zaktualizuj wybranego ucznia
- get /uczniowie/delete/:id - usun ucznia z listaUczniow
*/
