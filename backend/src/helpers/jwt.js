
require('dotenv').config();
const jwt = require('jsonwebtoken');

const tokenPrivateKey = process.env.JWT_TOKEN_PRIVATE_KEY;
const refrershTokenPrivateKey = process.env.JWT_TOKEN_PREFRESH_PRIVATE_KEY;

const options = { expiresIn: '30 minutes' };
const refrershOptions = { expiresIn: '30 days' };

const generateJwt = (payload) => {
    return jwt.sign(payload, tokenPrivateKey, options);
};

const generateRefreshJwt = (payload) => {
    return jwt.sign(payload, refrershTokenPrivateKey, refrershOptions);
};

const verifyJwt = (token) => {
    return jwt.verify(token, tokenPrivateKey);
};

const verifyJRefreshJwt = (token) => {
    return jwt.verify(token, refrershTokenPrivateKey);
};

const getTokenFromHeaders = (headers) => {
    const token = headers['authorization'];
    // Tirando o Beare do começo
    return token ? token.slice(7, token.length) : null;
};

module.exports = { generateJwt, verifyJwt, generateRefreshJwt, verifyJRefreshJwt, getTokenFromHeaders };