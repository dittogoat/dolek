import express from 'express';
const app = express();
const port = 4000;


app.use(express.urlencoded({
    extended: true
}))

app
.get('/',(req,res)=> {
    res.send('działa');

})
.get('/subskrybent',(req,res)=> {
    res.write('<head><meta charset="UTF-8"></head>');
    res.write('<body>');
    res.write('<form action="/dane" method="POST">');
    res.write('Imię <input type="text" name="imie" id="imie"></br>');
    res.write('Wiek <input type="number" name="wiek" id="wiek"></br>')
    res.write('<button type="submit">Wyslij</button>')
    res.write('</form>')
    res.write('</body>');
    res.end();

})
.get('/subskrybent/:imie/:naz',(req,res)=> {
    res.send(`Witaj ${req.params.imie} ${req.params.naz}`);

})
.get('/subskrybent/:imie',(req,res)=> {
    res.send(`Witaj ${req.params.imie}`);

})
.post('/dane',(req,res)=>{
    res.send(`Imię: ${req.body.imie} Wiek: ${req.body.wiek}`)

} )
.listen(port, ()=>{
    console.log('serwer dziala')
})