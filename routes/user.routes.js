const express = require("express");
const router =  express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const ViewUsers = require('../controllers/user.Controller')


// user routes
router.get("/", authMiddleware , ViewUsers);

module.exports = router;