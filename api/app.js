const express = require("express");
const http = require('http');
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const env = require("dotenv"); 
const userAuthRouter = require("./router/Auth"); 
const studentAuthRouter = require("./router/studentAuth"); 
const schoolAuthRouter = require("./router/SchoolAuth"); 
const facultyAuthRouter = require("./router/FacultyDetails"); 

env.config();
app.use(express.json()) ;
app.use(cors());

// app.use(express.static(path.join(__dirname, 'public')));
 app.use("/uploads",express.static(path.join(__dirname , 'uploads')));

app.use("/api",userAuthRouter);
app.use("/api",studentAuthRouter);
app.use("/api",schoolAuthRouter);
app.use("/api",facultyAuthRouter);


const requestListener = function (req, res) {};

const server = http.createServer(app);
server.listen(process.env.port, process.env.host, () => {
    console.log(`Server is running on http://${process.env.host}:${process.env.port}`);
});



mongoose.connect('mongodb://localhost:27017/school').then(c=>{
	console.log("Database connected ...")
});
