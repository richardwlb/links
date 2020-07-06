const express = require('express');
const db = require('./models');

const authController = require('./controllers/auth');

const app = express();

app.use(express.json()); // To be able to receive data in JSON format
app.use(express.urlencoded({ extended: false })); // Do not use qs Library

app.use('/auth', authController);

app.get('/', (req, res) => {
    return res.json('Hello!')
});

db.sequelize.sync().then( ()=> {
    app.listen(3001, () => {
        console.log('listening on port 3001');
    });
});
