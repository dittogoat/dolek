import express from 'express';
const app = express();

const port = 4000;

app
.get('/', (req, res) => {
res.send('test');
})

.get('/test', (req, res) => {
for (let i = 0; i < 10; i++) {
    res.write('siemano<br>');
}
res.end();
})

.get('/user/:id', (req, res) => {
    console.log('GET /user/:id');
    res.write(req.params.id)
    res.end()
})

.listen(port, () => {
console.log(`Serwer uruchomiono na porcie ${port}`);
});
