const express = require("express");
const router = express.Router();

const project_controller = require("../controllers/project_ctrl.js");

router.get("/projects",project_controller.get_projects);

router.post("/projects",project_controller.add_new_project);

router.get("/projects/:id",project_controller.get_project_by_id);

router.put("/projects/:id",project_controller.update_project_by_id);

router.delete("/projects/:id",project_controller.de);