const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');

const router = express.Router();

const saltRounds = 10;

router.get('/sign-in', (req, res) => {
    return res.json('sign-in');
});

router.get('/sign-up', async (req, res) => {

    const email = 'richard@bnu.com.br';
    const password = '1020';

    const hash = bcrypt.hashSync(password, saltRounds);
    console.log(hash);

    const result = await Account.create({email, password: hash});

    return res.json(result);

});

module.exports = router;