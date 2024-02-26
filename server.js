const express = require('express');
const app = express();

const mongodb = require('./data/database');
const port = process.env.PORT || 5500;


mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => { console.log(`Database is listening and running on port: ${port}`) });
    }
})



app.use('/', require('./routes'));

