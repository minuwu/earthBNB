const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"
const Listing = require("./models/listing.js")
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/expressError.js");
const Joi = require("joi");
const {listingSchema} = require("./schema.js");

app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.engine("ejs", ejsMate);
app.use(express.json());


main()
    .then(res => console.log("Mongoose: Connection Successful: ", res))
    .catch(err => console.log("Mongoose: Connection Failed: ", err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/testlisting",wrapAsync(async (req,res)=>{
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
}))

app.get("/",(req,res)=>{
    console.log("GET: / REQUESTED ");
    res.send("Server working");
    console.log("GET: / RESPONDED ");
})

//index route:
app.get("/listings",wrapAsync(async (req,res)=>{
    console.log("GET: /listings REQUESTED ");
    let allListings = await Listing.find();
    res.render("listings/index.ejs",{allListings});
    console.log("GET: /listings RESPONDED ");
}));
//new route: 
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})
//show route:
app.get("/listings/:id", wrapAsync(async (req,res)=>{
    let {id}  = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
}));
//create route: 
// app.post("/listings",wrapAsync(async (req,res, next)=>{
//     let {title, description, image, price, location, country} = req.body;
//     let newListing = new Listing({
//         title,
//         description,
//         image,
//         price,
//         location,
//         country
//     });
//     result = await newListing.save();
//     res.redirect("/listings");
// }));
//create route: //with JOI validation
app.post("/listings",wrapAsync(async (req,res, next)=>{
    let {title, description, image, price, location, country} = req.body;
    let obj = {
        listing: {
            title,
            description,
            image, 
            price,
            location,
            country
        }
    };
    let result = listingSchema.validate(obj);
    console.log(result);
    console.log("**********");
    if(result.error){
        next(new ExpressError(401,"Validation failed"));
    }
    let newListing = new Listing(obj.listing);
    result = await newListing.save();
    res.redirect("/listings");
}));
//edit route:
app.get("/listings/:id/edit",wrapAsync(async (req,res)=>{
    let {id}  = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
}))
//update route:
app.put("/listings/:id", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}))
//delete route:
app.delete("/listings/:id", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}))

app.all("*", (req,res,next)=>{
    next(new ExpressError(404,"Page Not Found"))
})

//error handling middleware
app.use((err, req, res, next)=>{
    let { statusCode= 500, message= "Something went wrong" } = err;
    console.log(`Handler: ErrCode ${statusCode} | ErrMsg ${message}`);
    // res.status(statusCode).send(message);
    res.status(statusCode).render("listings/error.ejs",{message});
})

app.listen(PORT,(req,res)=>{
    console.log("Express: App listening on port: ",PORT);
})
