const User = require("../models/userMod");

const getUsers = async (req,res)=>{
    try {
        const loggedInUser = req.user._id; 
        
        const users = await User.find({_id: {$ne : loggedInUser}}).select('-password');

        res.status(200).json(users);
    } catch (error) {
        console.log("Error in the user controller. ",error.message);
        res.status(500).json("Internal server error");
    }
}
module.exports = { getUsers }