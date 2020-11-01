require("dotenv").config({path: "config/keys.env"});
const {express,cors,body_parser,file_upload,mongoose,session} = require("./config/library_loader.js");
const app = express();

app.use(body_parser.urlencoded({extended: true}));
app.use(cors({

    origin: "/"
}))
app.use(file_upload());

//add a project

//get a specific project

//get all projects

app.get("/projects",(req,res)=>{

    res.send("My Projects")
})

//get a project by technology

//update a project

//delete a project

app.get("/",(req,res)=>{

    res.send("HOME")
});

app.get("/project",(req,res)=>{

    res.send("PROJECT");
})

app.listen(process.env.PORT,()=>{

    console.log("The web server is up and running");
});