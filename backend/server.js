const express = require('express');
const {CreateConnection} = require('./database');
const {routes} = require('./routes');

const PORT = process.env.PORT || 8080;
const app = express();


app.use(express.json());

routes.forEach((route) => {
    app[route.method](route.path,route.handler);
});

CreateConnection().then(()=> {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});