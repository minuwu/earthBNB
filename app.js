const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"

main()
    .then(res => console.log("Mongoose: Connection Successful: ", res))
    .catch(err => console.log(err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res)=>{
    res.send("Server working");
})

app.listen(PORT,(req,res)=>{
    console.log("Express: App listening on port: ",PORT);
})