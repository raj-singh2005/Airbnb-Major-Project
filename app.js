const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js")
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to DB");
}).catch(err =>{
    console.log(err);
});

async function main() {
    await mongoose.connect(mongo_url);
}

app.get("/testListing", async (req,res)=>{
  let sampleListing = new Listing({
    title : "my new home",
    description : "home far from home",
    price : 7000 ,
    location : "ranchi, jharkhand",
    country : "India",
  });
  await sampleListing.save() ;
  console.log("sample was saved successfully");
  res.send("succesfull testing");
});




//root route 
app.get("/",(req,res)=>{
    res.send("hi , im root");
});

//creating server
app.listen(8080,()=>{
    console.log("server is listening on port : 8080");
})