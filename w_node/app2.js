import express from 'express';
const app = express();
const port = 4000;

app
	.use(express.urlencoded({ extended: true })) // obsługa danych z formularzy
	// .use(express.json()) // obsługa danych JSON
	.use((req, res, next) => {
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
		res.setHeader('Pragma', 'no-cache');
		res.setHeader('Expires', '0');
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
		next();
	})
	.use((request, response, next) => {
        if (request.method=='POST'){
            console.log(`Metoda ${request.method}`);
            console.log(request.body);
        } else if (request.method == 'GET'){
            console.log(`Metoda ${request.method}`);

        }
		// console.log(` ${request.url}`); //  http://localhost:3000/user/:id -> 'GET /user/:id'
		next();
	})



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