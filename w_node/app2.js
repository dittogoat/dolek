import express from 'express';
const app = express();
const port = 4000;

app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    let title = 'asdasdf'; 
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
        <form action="/dane" method="POST">
            Imie <input type="text" name="imie"></br>
            Nazwisko <input type="text" name="naz"></br>
            Wiek <input type="number" name="wiek"></br>
            <button type='submit'>Wyslij</button>
        </form>
    
    </body>
    </html>`;
    res.send(`${html}`)
})
.post('/dane',(req,res)=>{
    res.send(`${req.body.imie} ${req.body.naz} wiek: ${req.body.wiek}`)
})
.listen(port, ()=>{
    console.log('chill')
})