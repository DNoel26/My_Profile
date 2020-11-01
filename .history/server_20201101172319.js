const express = require("express");
const body_parser = require("body-parser");
const file
require("dotenv").config({path: "config/keys.env"});



const app = express();

app.listen(process.env.PORT,()=>{

    console.log("The web server is up and running");
});