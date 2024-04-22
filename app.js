const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"
const Listing = require("./models/listing.js")

main()
    .then(res => console.log("Mongoose: Connection Successful: ", res))
    .catch(err => console.log(err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/testlisting",async (req,res)=>{
    let listing = new Listing({
        title: "Sweet Home",
        description: "A cottage in personal real estate",
        price: 1200,
        location: "New Bridge, Kathalpara",
        country: "Bangladesh"
    })
    await listing.save();
    await res.send("Insertion Successful");
    let data = await (Listing.find());
    console.log(data);
})

app.get("/",(req,res)=>{
    res.send("Server working");
})

app.listen(PORT,(req,res)=>{
    console.log("Express: App listening on port: ",PORT);
})