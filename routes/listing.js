const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const {listingSchema} = require("../schema.js");


//index route:
router.get("/",wrapAsync(async (req,res)=>{
    console.log("GET: /listings REQUESTED ");
    let allListings = await Listing.find();
    res.render("listings/index.ejs",{allListings});
    console.log("GET: /listings RESPONDED ");
}));
//new route: 
router.get("/new",(req,res)=>{
    res.render("listings/new.ejs");
})
//show route:
router.get("/:id", wrapAsync(async (req,res)=>{
    let {id}  = req.params;
    let listing = await Listing.findById(id).populate("reviews");
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
router.post("/",wrapAsync(async (req,res,next)=>{
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
router.get("/:id/edit",wrapAsync(async (req,res)=>{
    let {id}  = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
}))
//validation for update route
const validateListing = (req,res,next) =>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(401,errMsg);
    }else{
        next();
    }
}
//update route:
router.put("/:id", validateListing, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}))

//delete route: 
router.delete("/:id", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    // console.log(deletedListing);
    res.redirect("/listings");
}))


module.exports = router;