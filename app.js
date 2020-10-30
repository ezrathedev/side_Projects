import express from 'express';
const app = express;
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello from the server')
    req.send('this is the end.');
})

app.listen(port, () => {
    console.log(`Hello i'm listening from port http://localhost:${port}`);
} )