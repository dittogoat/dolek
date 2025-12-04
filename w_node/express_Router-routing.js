import express from 'express';

const app = express();
const port = 3000;

const routerKlasa = express.Router();
routerKlasa
	.get('/list', (req, res) => { // /klasy/list
		/* jakis kod */
	})
	.get('/details/:id', (req, res) => { // /klasy/details/:id
		/* jakis kod */
	})
	.get('/add/', (req, res) => { // /klasy/add
		/* jakis kod */
	})
	.post('/add', (req, res) => { // /klasy/add
		/* jakis kod */
	})
	.get('/update/:id', (req, res) => { // /klasy/update/:id
		/* jakis kod */
	})
	.post('/update', (req, res) => { // /klasy/update
		/* jakis kod */
	})
	.get('/delete/:id', (req, res) => { // /klasy/delete/:id
		/* jakis kod */
	});
	
app.use('/klasy', routerKlasa);
