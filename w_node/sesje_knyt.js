import express, { urlencoded } from 'express'
import session from 'express-session'
import flash from 'connect-flash'


const app = express();
const port = 3000;


app.use(urlencoded({extended:true}))

app.use(session({
    secret: 'T@jny-Kluc2-D0-52yfr0w@n!@-M!n-32-2n@k!-N@jlep!ej-Wygener0w@ny-L050w0',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 30 * 1000
    }
}))

app.use(flash())


app.get('/',(req,res)=>{
    let html = `<html>
        <form action="" method="post">
            Nazwa użytkownika: <input type="text" name="nick"><br>
            <button type="submit">Wyślij</button>
        </form></html>
    `
    res.send(html)
})


app.post('/',(req,res)=>{
    req.session.nick = req.body.nick || 'Gość';
    res.redirect('/dashboard')
})

app.get('/dashboard',(req,res)=>{
    const nick = req.session.nick || "Gość";
    res.send(`Witaj ${nick}`)
})


app.listen(port,()=>{
    console.log('działa')
})

/* Zadanie 3:
1. Dodaj formularz logowania na stronie głównej, który pozwala użytkownikowi wprowadzić nazwę użytkownika.
2. Po przesłaniu formularza, zapisz nazwę użytkownika w sesji i przekieruj użytkownika do dashboard.
3. Wyświetl nazwę użytkownika na stronie dashboard.
*/
