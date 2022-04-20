const express = require('express');
const {CreateConnection} = require('./database');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.get('/server',(req,res)=> {
    res.send('Server running')
});

CreateConnection().then(()=> {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});