const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Tenent = require("../models/Tenent");

const generateToken = (user) =>{
    const payload ={
        id: user._id,
        tenentId: user.tenentId,
        role: user.role
    }
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
}

const appRegister = async (req, res)=>{
    try{
    // fetch user data from request body
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    // const Tenentname = req.body.name;

    // basic validation
    if (!username || !email || !password || !role) {
            return res.status(400).json({
                message: "All fields are required"
            });
    }
    
    //hash password
    const hashPassword = await bcrypt.hash(password, 10);
    let tenent;
    
    if(role === 'Admin'){
        //create a tenent for admin user
        tenent = await Tenent.create({
            name: `${username}${Date.now()}`
            // name: crypto.randomUUID()
        });
    }else{
        // assign default tenent for normal user
        tenent = await Tenent.findOne();
    }

    // check if tenent exists
    if(!tenent){
            return res.status(400).json({
                message: "No tenent found. Please contact admin."
            })
    }

    // create user
    const user = await User.create({
        username,
        email,
        password: hashPassword,
        role,
        tenentId: tenent._id
    });

    // generate token
    const token = generateToken(user);
   
    res.status(201).json({message: "User registered successfully", user, token});
    }catch(err){
        console.log("Register Error : ",err);
        res.status(500).json({
            message: err.message,
            errorName : err.name
        });
    }
    
}

const appLogin = async (req, res)=>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "Email and password are required"});
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message: "unAuthorized User"});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({message: "Invalid credentials"});
        }

        const token = generateToken(user);
        res.status(200).json({message: "User logged in successfully", user, token});
        
    }catch(err){
        console.log("Login Error : ",err);
        res.status(500).json({message: "Server error"});
    }
}

module.exports = {
    appRegister,
    appLogin
};