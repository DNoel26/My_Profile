const mongoose = require("mongoose");
const { Schema } = mongoose;

const Project_schema = new Schema({
    
    //title, description, image_path, link, technologies, date_created, last_modified
    title: {

        type: String,
        required: true,
    },
    description: {

        type: String,
        required: true,
    },
    link: {

        type: String,
    },
    technologies: {

        type: [String],
    },
    image_path: {

        type: String,
        default: "default.jpg", 
    },
    project_type: {

        type: String,
        required: true,
    },
    date_created: {

        type: Date,
        default: Date.now(),
    },
    last_modified: {

        type: Date,
        //default: 
    },
});

const Project_model = mongoose.model('Project', Project_schema);

module.exports = Project_model;