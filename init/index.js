const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("../models/listing.js");
const initdata = require("./data.js");

main()
    .then(res => console.log("Mongoose: Connection Successful: ", res))
    .catch(err => console.log(err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

let initDB = async () =>{
    console.log("initDB: Initialized...")
    await Listing.deleteMany({});
    console.log("initDB: Listing Cleared... ")
    await Listing.insertMany(initdata.data);
    console.log("initDB: Listing Populated... ")
    let result =  await Listing.find();
    console.log(result);
}

initDB();