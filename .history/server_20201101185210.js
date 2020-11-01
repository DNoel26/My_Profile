require("dotenv").config({path: "config/keys.env"});
const {express,cors,body_parser,file_upload,mongoose,session,project_routes} = require("./config/library_loader.js");
const app = express();

app.use(body_parser.urlencoded({extended: true}));
app.use(cors({

    origin: "/"
}))
app.use(file_upload());

app.use("/projects",project_routes);

app.get("/",)

//add a project

//get a specific project

//get all projects

//get a project by technology

//update a project

//delete a project

app.listen(process.env.PORT,()=>{

    console.log("The web server is up and running");
});