exports.get_projects = (req,res)=>{

    res.send("GET ALL PROJECTS");
};

exports.add_new_project = (req,res)=>{

    res.send("ADD A NEW PROJECT")
};

exports.get_project_by_id = (req,res)=>{

    res.send("GET A SPECIFIC PROJECT");
};

exports.update_project_by_id = (req,res)=>{

    res.send("UPDATE A SPECIFIC PROJECT");
};

exports.delete_project_by_id = (req,res)=>{

    res.send("DELETE A SPECIFIC PROJECT");
};