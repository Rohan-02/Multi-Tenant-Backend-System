const express = require("express");
const router =  express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { 
    createOrder,
    ViewOrders,
    OrderById } = require('../controllers/order.Controller');


//order routes
router.post("/",authMiddleware, createOrder);
router.get("/", authMiddleware , ViewOrders);
router.get("/:id", authMiddleware , OrderById);

module.exports = router;
