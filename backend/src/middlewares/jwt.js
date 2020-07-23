const { verifyJwt, getTokenFromHeaders } = require('../helpers/jwt')

const checkJwt = (req, res, next) => {

    // Pulando algumas rotas que não precisam de verificação de autenticação 
    // Esse dois pontos path esta criando um ALIAS para a url
    const { url: path } = req;
    const excluedPath = ['/auth/sign-in', '/auth/sign-up', '/auth/refresh'];

    //As duas exclamações transformam em boolean, ou seja true se achou algo:
    const isExcluded = !!excluedPath.find(  (p) => p.startsWith(path));

    if(isExcluded) return next();
    // END Pulando algumas rotas que não precisam de verificação de autenticação 

    const token = getTokenFromHeaders(req.headers);

    if(!token){
        return res.jsonUnauthorized(null, 'Invalid Token')
    }

    try {
        const decoded = verifyJwt(token);
        req.accountId = decoded.id;
        next();
      } catch (error) {
        return res.jsonUnauthorized(null, 'Invalid tokend');
      }

};

module.exports = checkJwt;