const path = require("path");
const express = require("express");
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const cors = require('cors');

const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/message");
const userRoutes = require("./routes/user");

const connectToDb = require("./DB/connectToDb");

const { app, server } = require("./socket/socket");

//for deployment
const dirname = path.resolve();

dotenv.config();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());


const Port = process.env.PORT || 5000;

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users", userRoutes);

//for deployment
app.use(express.static(path.join(dirname, "/frontend/build")));
app.get("*", (req,res) => {
    res.sendFile(path.join(dirname, "frontend", "build", "index.html"));
});

server.listen(Port,()=> {
    connectToDb()
    console.log(`App running on port ${Port}`)
});