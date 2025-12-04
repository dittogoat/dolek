import express from 'express';

const app = express();
const port = 4000;

generujLayout = (layout, resource, daneDlaLayoutu) => {
	console.log('	[generujLayout]	layout:', layout);
	resource.render(layout, daneDlaLayoutu, (error, content) => {
		if (error) {
			console.log('	[generujLayout]	błąd renderowania "' + layout + '":', error);
			throw error;
		}

		resource.write(content);
		resource.end();
	});
}



app
.set('views', './') // określenie miejsca z którego mają być brane szablony
.set('view engine', 'ejs') // włączenie silnika EJS
.get('/',(req,res)=>{
    res.write('działa');
})
app.get('/uzytkownik', (req, res) => {
	
	const uzytkownik = {
		imie: 'Jan',
		nazwisko: 'Kowalski',
		login: 'jankowal',
		miasto: 'Warszawa'
	};

	generujLayout('uzytkownik', res, { uzytkownik });
})
.listen(port,()=>{
    console.log('uruchomiono')
})