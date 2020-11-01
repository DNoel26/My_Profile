const Project_model = require("../models/project_mdl.js");

exports.get_projects = (req,res)=>{

    Project_model.find()
    .then(projects=>{

        console.log(projects);

        if(projects.length > 0)
        {
            res.status(200).json({
                
                data: projects,
                message: "List of all projects",
                array_length: projects.length,
            });    
        }
        
        else
        {
            res.status(400).json({
                
                message: "No projects found in database",
            });
        }
    })
    .catch(err=>{

        console.log(`Error in Project Controller: Get Projects: ${err}`);

        res.status(500).json({

            message: `Error in sending datalist of all projects: ${err}`,
        });
    });

    //res.send("GET ALL PROJECTS");
};

exports.add_new_project = (req,res)=>{

    const new_project = 
    {
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        technologies: req.body.technologies,
        project_type: req.body.project_type,
    };
        
    const project = new Project_model(new_project);

    project.save()
    .then(proj=>{

        console.log(proj);

        res.status(200).json({
            
            data: proj,
            message: "Your project was added successfully",
        });    
    })
    .catch(err=>{

        console.log(`Error in Project Controller: Add New Project: ${err}`);

        res.status(500).json({

            message: `Error in adding this project: ${err}`,
        });
    });
    //res.send("ADD A NEW PROJECT");
};

exports.get_project_by_id = (req,res)=>{

    res.send("GET A SPECIFIC PROJECT");
};

exports.update_project_by_id = (req,res)=>{

    Project_model.findByIdAndUpdate(req.params.id,{

        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        technologies: req.body.technologies,
        project_type: req.body.project_type,
    })
    .then(()=>{

        if(req.params.id !== null || req.params.id !== undefined)
        {
            res.status(200).json({

                message: `Your project with the id ${req.params.id} was updated successfully`,
            });
        }

        else
        {
            res.status(400).json({

                message: `Cannot update project with id ${req.params.id} as it does not exist in the database`,
            });
        }
    })
    .catch(err=>{

        console.log(`Error in Project Controller: Update Project by ID: ${err}`,req.params.id);

        res.status(500).json({

            message: `Error in trying to update this project: ${err}`,
        });
    });
    
    //res.send("UPDATE A SPECIFIC PROJECT");
};
    
exports.delete_project_by_id = (req,res)=>{

    Project_model.findByIdAndDelete(req.params.id)
    .then(()=>{

        if(req.params.id !== null || req.params.id !== undefined)
        {
            res.status(200).json({

                message: `Your project with the id ${req.params.id} was deleted successfully`,
            });
        }

        else
        {
            res.status(400).json({

                message: `Cannot delete project with id ${req.params.id} as it does not exist in the database`,
            });
        }
        
    })
    .catch(err=>{

        console.log(`Error in Project Controller: Delete Project by ID: ${err}`,req.params.id);//Project_model.findByIdAndDelete(req.params.id));

        res.status(500).json({

            message: `Error in trying to delete this project: ${err}`,
        });
    });

    //res.send("DELETE A SPECIFIC PROJECT");
};