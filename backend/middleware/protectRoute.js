const jwt = require("jsonwebtoken");
const User = require("../models/userMod");

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json("No token found");
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (!verified) {
            return res.status(401).json("Invalid Token");
        }

        const user = await User.findById(verified.userId).select("-password");

        if (!user) {
            return res.status(401).json("No User Found");
        }

        req.user = user;

        next();

    } catch (error) {
        console.log("Error in the protectRoute middleware", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { protectRoute };