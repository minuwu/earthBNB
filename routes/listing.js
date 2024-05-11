const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const {listingSchema} = require("../schema.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

//index route:
router.get("/",wrapAsync(async (req,res)=>{
    // console.log("GET: /listings REQUESTED ");
    let allListings = await Listing.find();
    res.render("listings/index.ejs",{allListings});
    // console.log("GET: /listings RESPONDED ");
}));
//new route: 
router.get("/new",isLoggedIn, (req,res)=>{
    res.render("listings/new.ejs");
})
//show route:
router.get("/:id", wrapAsync(async (req,res)=>{
    let {id}  = req.params;
    let listing = await Listing.findById(id).populate("reviews").populate("owner");
    if(!listing){
        req.flash("error","Listing Doesn't Exist!");
        res.redirect("/listings");
    }
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
router.post("/",isLoggedIn, wrapAsync(async (req,res,next)=>{
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
    newListing.owner = req.user._id;
    result = await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
}));
//edit route:
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(async (req,res)=>{
    let {id}  = req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing Doesn't Exist!");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs", {listing});
}))

//update route:
router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
}))

//delete route: 
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    if(!deletedListing){
        req.flash("error","Listing Doesn't Exist!");
        res.redirect("/listings");
    }
    // console.log(deletedListing);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
}))


module.exports = router;