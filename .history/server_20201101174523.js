require("dotenv").config({path: "config/keys.env"});
const {express,cors,body_parser,file_upload,mongoose,session} = require("./config/library_loader.js");
const app = express();

app.use(body_parser.urlencoded({extended: true}));
app.use(file_upload());

app.get("/",(req,res)=>{

    res.send("HOME")
});

app.get("/project",(req,res)=>{

    res.send("PROJECT")
})

app.listen(process.env.PORT,()=>{

    console.log("The web server is up and running");
});