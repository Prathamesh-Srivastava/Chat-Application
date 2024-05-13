const express = require("express");
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const cors = require('cors');

const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/message");
const userRoutes = require("./routes/user");

const connectToDb = require("./DB/connectToDb");

const { app, server } = require("./socket/socket");

dotenv.config();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());


const Port = process.env.PORT || 8000;

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users", userRoutes);

server.listen(Port,()=> {
    connectToDb()
    console.log(`App running on port ${Port}`)
});