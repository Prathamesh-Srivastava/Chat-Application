const express = require("express");
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/message");
const userRoutes = require("./routes/user");

const connectToDb = require("./DB/connectToDb");

const  app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());

const Port = process.env.PORT || 8000;

app.get('/',(req,res)=>{
    res.send("Hello World")
});

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users", userRoutes);

app.listen(Port,()=> {
    connectToDb()
    console.log(`App running on port ${Port}`)
});