const UserMod = require("../models/userMod");
const bcrypt = require("bcryptjs"); 
const generateTokenAndSetCookie = require("../utils/genJWT");

const signup = async (req,res)=>{
    try {
        const {fullName,userName,password,confirmPassword,gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json("Password and Confirm Password do not match");
        }

        const user  = await UserMod.findOne({userName});

        if(user){
            return res.status(400).json("Username already exists");
        }

        const maleProfile = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const femaleProfile = `https://avatar.iran.liara.run/public/girl?username=${userName}`
        
        const salt = await bcrypt.genSalt(10);
        const hashedPswd = await bcrypt.hash(password,salt);
        const newUser = new UserMod({
            fullName,
            userName,
            password:hashedPswd,
            gender,
            profilePic : gender == "male" ? maleProfile : femaleProfile
        });

        if (newUser) {
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(400).json("Invalid User data");
        }

    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
}
const login = async (req,res)=>{
    try {
        const{userName,password}= req.body;
        const user = await UserMod.findOne({userName});

        if(!user){
            return res.status(400).json("No User Found");
        }

        const validPassword = await bcrypt.compare(password,user.password);

        if(!validPassword){
            return res.status(400).json("Incorrect Password");
        }

        generateTokenAndSetCookie(user._id,res);
        res.status(200).json({
            _id : user._id,
            fullName: user.fullName,
            userName: user.userName,
            gender: user.gender,
            profilePic : user.profilePic
        });
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
}
const logout = async (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json("Logout Successfull");
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
}

module.exports = {signup,login,logout};