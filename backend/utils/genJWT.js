const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY,{
        expiresIn: "15d"
    });

    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000, //15-days in ms
        httpOnly: true,  //Prevents accessing token from javascript
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    });
}

module.exports = generateTokenAndSetCookie;