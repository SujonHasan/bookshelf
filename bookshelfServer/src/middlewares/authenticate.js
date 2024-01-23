const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) =>{

    let token = null;
    // console.log("headers = ", req.headers.authorization);
    const hToken = req.headers.authorization;

    if(req && hToken){

        token = hToken.split(' ')[1];
        if(!token) return res.status(401).json({error: "Authentication faild"})
    }

    // console.log("token ==== ", token);

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) =>{

        if(err) return res.status(401).json({error: "Invalid Token"});
        // console.log("decode = ", decode);
        next();
    })
    
}

module.exports = authenticate;