const Order = require("../models/Order");

const createOrder = async(req, res)=>{
    const {tenentId, id} = req.user;

    const order = await Order.create({
        tenentId : tenentId,
        userId : id,
        amount : req.body.amount,
        status : "CREATED"
    })
    res.status(201).json({message: "Order created successfully", order});
}

const ViewOrders = async(req, res)=>{
    try{
        const {tenentId, role, id: userId} = req.user;
        const filter = {tenentId};
        if (role === "User") {
            // Users can only see their own orders
            filter.userId = userId;
        } else if (role === "Admin" && req.query.userId) {
            // Admin can filter by any user in the same tenant
            filter.userId = req.query.userId;
        }
        const order = await Order.find(filter);
        res.json({message: "Orders data", order});
    }catch(err){
        console.log("View Order error : ", err);
        res.status(500).json({message : err.message});
    }
    
}

const OrderById = async(req, res)=>{
    try{
        const orderId = req.params.id;
        const {tenentId, id, role} = req.user;
        const order = await Order.findById(orderId);
        if(!order){
            return res.status(404).json({message : "Order not found"});
        }

        if(order.tenentId.toString()!==tenentId){
            return res.status(403).json({message : "Invalid TenentId"});
        }

        if (role === "User" && order.userId.toString() !== id) {
            return res.status(403).json({ message: "Not your order" });
        }
        res.json({message: "Order data by ID", order});
    }catch(err){
        console.log("Orders Error by ID : ", err);
        res.status(500).json({message : "Internal Server Error"})
    }
    
}

module.exports = {
    createOrder,
    ViewOrders,
    OrderById
}