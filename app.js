const express = require("express");
const app = express();
const mongoose = require("mongoose");

const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to DB");
}).catch(err =>{
    console.log(err);
});

async function main() {
    await mongoose.connect(mongo_url);
}






//root route 
app.get("/",(req,res)=>{
    res.send("hi , im root");
});

//creating server
app.listen(8080,()=>{
    console.log("server is listening on port : 8080");
})