require("dotenv").config({path: "config/keys.env"});
const Library = require("/Windows/")


const app = express();

app.listen(process.env.PORT,()=>{

    console.log("The web server is up and running");
});