const express = require("express");
const router = express.Router();

const project_controller = require("../controllers/project_ctrl.js");

router.get("/projects",project_controller.get_projects);

router.post("/projects",(req,res)=>{


});

router.get("/projects/:id",(req,res)=>{


});

/*
    HTTP METHOD: UPDATE
    PURPOSE: UPDATE A SPECIFIC PROJECT
*/

router.put("/projects/:id",(req,res)=>{


});

/*
    HTTP METHOD: DELETE
    PURPOSE: DELETE A SPECIFIC PROJECT
*/

router.delete("/projects/:id",(req,res)=>{


});