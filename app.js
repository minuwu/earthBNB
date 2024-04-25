const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"
const Listing = require("./models/listing.js")
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.engine("ejs", ejsMate);


main()
    .then(res => console.log("Mongoose: Connection Successful: ", res))
    .catch(err => console.log("Mongoose: Connection Failed: ", err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/testlisting",async (req,res)=>{
    console.log("GET: /testlisting REQUESTED ");
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
    console.log("GET: /testlisting RESPONDED ");
})

app.get("/",(req,res)=>{
    console.log("GET: / REQUESTED ");
    res.send("Server working");
    console.log("GET: / RESPONDED ");
})

//index route:
app.get("/listings",async (req,res)=>{
    console.log("GET: /listings REQUESTED ");
    let allListings = await Listing.find();
    res.render("listings/index.ejs",{allListings});
    console.log("GET: /listings RESPONDED ");
    
})
//new route: 
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})
//show route:
app.get("/listings/:id", async (req,res)=>{
    let {id}  = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
})
//create route: 
app.post("/listings",async (req,res)=>{
    let {title, description, image, price, location, country} = req.body;
    let newListing = new Listing({
        title,
        description,
        image,
        price,
        location,
        country
    });
    let result = await newListing.save();
    res.redirect("/listings");
})
//edit route:
app.get("/listings/:id/edit",async (req,res)=>{
    let {id}  = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
})
//update route:
app.put("/listings/:id", async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
})
//delete route:
app.delete("/listings/:id", async (req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
})
app.listen(PORT,(req,res)=>{
    console.log("Express: App listening on port: ",PORT);
})
