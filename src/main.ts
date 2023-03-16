import express, { Express } from "express";

const APP = express();
const PORT: Number =  8080;



APP.get('/', (req, res) => {
    res.send("Hello World !!!");
})











APP.listen(PORT, () => {
    console.log(`Server running in : http://localhost:${PORT}`);
})

