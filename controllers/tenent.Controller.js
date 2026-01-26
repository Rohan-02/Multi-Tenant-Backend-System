const Tenent = require("../models/Tenent");

const addTenent = async (req, res)=>{
    const role = req.user.role;
    if(role!="Admin"){
        return res.status(403).json({message : "Admins only"});
    }
    const tenent = await Tenent.create({
        name: req.body.name,
        status: req.body.status
    })

    res.json({message: "Tenent created successfully", tenent});
}

const TenentById = async (req, res)=>{
    try{
        const tenent_id = req.params.id;
        const {tenentId, role} = req.user;
        if(role!="Admin" && tenent_id!== tenentId.toString()){
            res.status(401).json({message: "Access Forbidden : Unauthorized user"});
        }

        const tenent = await Tenent.findById(tenent_id);
        if(!tenent){
            res.status(404).json({message: "Tenent Not Found"});
        }
            res.json({message: "Tenent data", tenent});
    }  catch(err){
        console.log("Tenent Error", err);
        res.status(500).json({message : "Internal Server Error"});
    }
}

module.exports = {
    addTenent,
    TenentById
}