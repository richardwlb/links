const express = require('express');
const cors = require('cors');
const db = require('./models');
const response = require('./middlewares/response');
const checkJwt = require('./middlewares/jwt');

const authController = require('./controllers/auth');
const linkController = require('./controllers/link');

const app = express();

// Middleware. The first one before the rest.
app.use(cors());
app.use(response); 
app.use(checkJwt); 
// END Middleware. The first one before the rest.

app.use(express.json()); // To be able to receive data in JSON format
app.use(express.urlencoded({ extended: false })); // Do not use qs Library

app.use('/auth', authController);
app.use('/link', linkController);

app.get('/', (req, res) => {
    return res.json('Hello!')
});

db.sequelize.sync().then( ()=> {
    app.listen(3001, () => {
        console.log('listening on port 3001');
    });
});
