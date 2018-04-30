const express = require('express');

//import db from './data/db
const db = require('./data/db');

const server = express();

server.get('/', (req,res) => {
    res.send('API running');
});

server.get('/api/users', (erq, res) =>{
    //get users
    db
    .find()
    .then(users =>{
        res.json(users);
    }).catch(err => {
        res.status(500).json({ error:err });
    });
});

// /api/users/123
server.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    db
    .findById(id)
    .then(user => {
        res.json(user);
    })
    .catch(err => {

    });
});

server.listen(5000, () => console.log('\n== API Running on port 5000 ==\n'));