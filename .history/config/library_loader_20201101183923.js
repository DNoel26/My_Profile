const express = require("express");
const body_parser = require("body-parser");
const file_upload = require("express-fileupload");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
//ROUTES
const project_routes = require("../routes/")

Library = 
{
    express,
    body_parser,
    file_upload,
    mongoose,
    cors,
    session,
}

module.exports = Library;