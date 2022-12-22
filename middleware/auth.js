const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).json("Access denied. no token provided.");

    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.teacher = decoded;
        next();
    }
     catch (ex) {
        res.status(400).json("Invalid token provided.");
    }
}

//add auth to all route handlers that modify the data