const express = require("express");
const router =  express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {addTenent, TenentById} = require('../controllers/tenent.Controller');

//tenent routes
router.post("/", authMiddleware , addTenent);
router.get("/:id", authMiddleware , TenentById);

module.exports = router;