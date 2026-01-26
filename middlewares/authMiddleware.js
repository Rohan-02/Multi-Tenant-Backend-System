const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) =>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")){
        token = req.headers.authorization.split(" ")[1];
    }

    if(!token){
        return res.status(401).json({message : "NotAuthorized"});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
            id : decoded.id,
            tenentId : decoded.tenentId,
            role : decoded.role
        }
        next();

    }catch(err){
        console.log("Middleware Error : ", err);
        res.status(401).json({message : "Invalid Token"});
    }

}

module.exports = authMiddleware;