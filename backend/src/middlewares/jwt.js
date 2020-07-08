const { verifyJwt } = require('../helpers/jwt')

const checkJwt = (req, res, next) => {

    let token = req.headers['authorization'];
    // Tirando o Beare do começo
    token = token ? token.slice(7, token.length) : null;
    if(!token){
        return res.jsonUnauthorized(null, 'Invalid Token')
    }

    try {
        const decoded = verifyJwt(token);
        req.accountId = decoded.id;
    }catch {
        console.log('error');
    }

    next();
};

module.exports = checkJwt;