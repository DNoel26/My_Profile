const express = require("express");
require("dotenv").config({path: "config/keys.env"});




const app = express();

app.listen(process.env.PORT)