const express = require("express");
const {sendMessage, getMessage} = require("../controllers/messageCont");
const {protectRoute} = require("../middleware/protectRoute");

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessage);

module.exports = router;