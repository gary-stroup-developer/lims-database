const express = require('express');
const {CreateConnection} = require('./database');
const app = express();

app.get('/server',(req,res)=> {
    res.send('Server running')
});

app.listen(8080,()=> {
    CreateConnection('limsdb');
    console.log("lsitening on port 8080");
});