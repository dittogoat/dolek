import express from 'express';

const app = express();
const port = 3000;

const uzytkownik = express.Router()
uzytkownik
.get('/login',(req,res)=>{
	let html = `
		<form action='/info' method="POST">
			Login <input name='login'></br>
			Haslo <input name='haslo'></br>
			<button type='submit'>Wyslij</button>
		</form>
	`
	res.send(html)
})
	
app.use('/klasy', routerKlasa);
