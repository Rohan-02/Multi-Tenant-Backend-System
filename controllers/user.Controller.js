const User = require("../models/User");

const ViewUsers = async(req, res)=>{
    if(req.user.role !== "Admin"){
        return res.status(403).json({message : "Admins only"});
    } 
    const users = await User.find({
        tenentId : req.user.tenentId
    }).select("-password");
    res.json({message: "Users data", users});
}

module.exports = ViewUsers;