const express = require("express");
const {signup,login,logout} = require("../controllers/authCont");
const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', logout);

module.exports = router;