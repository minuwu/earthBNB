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
    initdata.data = initdata.data.map((obj)=>({...obj, owner: "663b16cb8a6b6f6888a08c1c"}));
    await Listing.insertMany(initdata.data);
    console.log("initDB: Listing Populated... ")
    let result =  await Listing.find();
    console.log(result);
    updateDB(); 
    console.log(result);
}

initDB();


async function updateDB(){
  console.log("Updating under process ....");
  await Listing.updateMany({},{image:"https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fHww"});
  await Listing.updateMany({price:{$lt: 35000}},{image: "https://images.unsplash.com/photo-1505334086731-6579ef4cf449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JhbmQlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D"});
  await  Listing.updateMany({price:{$lt: 30000}},{image: "https://images.unsplash.com/photo-1602081112620-4da569dda684?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhbmQlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D"});
  await  Listing.updateMany({price:{$lt: 25000}},{image: "https://images.unsplash.com/photo-1598902596597-728cb15eeb3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhbmQlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D"});
  await  Listing.updateMany({price:{$lt: 20000}},{image: "https://plus.unsplash.com/premium_photo-1661903136240-a97367001a64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYW5kJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"});
  await  Listing.updateMany({price:{$lt: 15000}},{image: "https://images.unsplash.com/photo-1601288537477-9b0cfc0ece5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyYW5kJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"});
  await  Listing.updateMany({price:{$lt: 10000}},{image: "https://images.unsplash.com/photo-1572803090136-5247de70532f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyYW5kJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"});
  await  Listing.updateMany({price:{$lt: 7000}},{image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww"});
  await  Listing.updateMany({price:{$lt: 6000}},{image:"https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"});
  await  Listing.updateMany({price:{$lt: 5000}},{image:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"});
  await  Listing.updateMany({price:{$lt: 4500}},{image:"https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"});
  await  Listing.updateMany({price:{$lt: 4000}},{image:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww"});
  await  Listing.updateMany({price:{$lt: 3500}},{image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww"});
  await   Listing.updateMany({price:{$lt: 3000}},{image:"https://images.unsplash.com/photo-1523459231854-ec3ba323a2e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdGVsfGVufDB8fDB8fHww"});
  await  Listing.updateMany({price:{$lt: 2500}},{image:"https://images.unsplash.com/photo-1527788065631-346a8345936e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW90ZWx8ZW58MHx8MHx8fDA%3D"});
  await  Listing.updateMany({price:{$lt: 2000}},{image:"https://images.unsplash.com/photo-1555262796-23a95209f95c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG1vdGVsfGVufDB8fDB8fHww"});
  await   Listing.updateMany({price:{$lt: 1500}},{image:"https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fG1vdGVsfGVufDB8fDB8fHww"});
  console.log("Updating finishing process ....");
  let res = await Listing.find();
  console.table(res);
}
