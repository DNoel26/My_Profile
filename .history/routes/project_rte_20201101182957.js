const express = require("express");
const router = express.Router();

const project_controller = require("../controllers/project_ctrl.js");

router.get("/projects",project_controller.get_projects);

router.post("/projects",)

router.get("/projects/:id",(req,res)=>{


});

router.put("/projects/:id",(req,res)=>{


});

router.delete("/projects/:id",(req,res)=>{


});