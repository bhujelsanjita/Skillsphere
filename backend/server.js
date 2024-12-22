const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const PORT = process.env.PORT | 3600;
app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
});
app.get("/", function(req,res){
    res.send("Hello World");
})