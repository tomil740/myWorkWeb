

import express from 'express';
import dbDao from './fsDb.js';
import cors from 'cors';


const app = express();
const port = 3100;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())





app.get('/declaries', (req, res) => {
    dbDao.getAll().then((declaries)=>res.json(declaries));
});

app.post('/insertDeclare', (req, res) => {
    const declare = JSON.stringify(req.body);
    dbDao.insertDeclare(declare);
    res.json('{"name":"John", "age":30, "car":null}')
});

app.listen(port, () => {
    //start service util
    console.log(`Server running on http://localhost:${port}`);
});
