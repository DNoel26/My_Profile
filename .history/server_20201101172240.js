const express = require("express");
require("dotenv").config({path: "config/keys.env"});
const body_parser = require("body-parser")




const app = express();

app.listen(process.env.PORT,()=>{

    console.log("The web server is up and running");
});