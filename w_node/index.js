import express from 'express';
const app = express();

const port = 4000;

app
.get('/',(req,res) => {
    res.send('test');
})
.get('/test',(req,res)=>{
    res.write('siemano')
    res.write('siemano')
    res.write('siemano')
    res.write('siemano')
    res.write('siemano')
    res.write('siemano')
    res.write('siemano')
    res.write('siemano')
    res.write('siemano')
    res.write('siemano')
    res.end()
})
.listen(port,()=>{
    console.log('uruchomiono')
})

// test
