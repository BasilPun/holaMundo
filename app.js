import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) =>{
    res.send('Hola Mundo!');
});

app.listen(PORT, () =>{
    console.log(`server running at: http://localhost:${PORT}`);
});