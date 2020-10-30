import express from "express";
const app = express();
// get , put , post, Delete


const port = 3000;

app.get("/", (req, res) => {
    res.send("hello from the server")
    // res.json()
})
app.post('/add', (req, res => {
    console.log(req.body.id);
    res.status(200);
}))

app.listen(port, () => {
    console.log('Hello i\'m listening from port http://localhost:3000');
} )