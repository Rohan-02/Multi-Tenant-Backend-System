const express = require("express");
const router =  express.Router();
const {appRegister, appLogin} = require('../controllers/auth.Controller');

// authentication routes
router.post("/register", appRegister);

router.post("/login", appLogin);

module.exports = router;