const path = require("path");
const dbConnect = require("./config/db");

require("dotenv").config({path:path.join(__dirname,"config.env")});
const app= require(path.join(__dirname,"app.js"));
dbConnect()
const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT no.:- ${process.env.PORT} `)
})
server.setTimeout(29000);