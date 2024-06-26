const Listing = require("../models/listing.js");
const {listingSchema} = require("../schema.js");
const ExpressError = require("../utils/expressError.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });



module.exports.listingIndex = async (req,res)=>{
    // console.log("GET: /listings REQUESTED ");
    let allListings = await Listing.find();
    res.render("listings/index.ejs",{allListings});
    // console.log("GET: /listings RESPONDED ");
}

module.exports.renderNewListingForm = (req,res)=>{
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req,res)=>{
    let {id}  = req.params;
    let listing = await 
    Listing
    .findById(id)
    .populate({
        path: "reviews",
        populate: {
            path: "author"
        }
    }
    ).populate("owner");
    if(!listing){
        req.flash("error","Listing Doesn't Exist!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", {listing});
}

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

module.exports.createNewListing = async (req,res,next)=>{
    let {title, description, image, price, location, country} = req.body;
    
    // let geoLocation = await geocodingClient
    // .forwardGeocode({
    //     query: location,
    //     limit: 1
    // })
    // .send();

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
    // console.log(req.body);
    // console.log(obj);
    let result = listingSchema.validate(obj);
    // console.log(result);
    // console.log("**********");
    if(result.error){
        next(new ExpressError(401,"Validation failed"));
    }
    let newListing = new Listing(obj.listing);
    newListing.owner = req.user._id;
    let url = req.file.path, filename = req.file.filename;
    newListing.image = {url, filename};
    // newListing.geometry = geoLocation.body.features[0].geometry;
    newListing.geometry = { "type": "Point", "coordinates": [91.832684,22.333946] };
    
    result = await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect(`/listings/${newListing._id}`);
}

module.exports.editListing = async (req,res)=>{
    let {id}  = req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing Doesn't Exist!");
        res.redirect("/listings");
    }
    let imageUrl = listing.image.url;
    imageUrl.replace("/upload","/upload/w_350"); //cloudinary image transformation
    res.render("listings/edit.ejs", {listing , imageUrl});
}

module.exports.updateListing = async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file != "undefined"){
        let url = req.file.path, filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    if(!deletedListing){
        req.flash("error","Listing Doesn't Exist!");
        res.redirect("/listings");
    }
    // console.log(deletedListing);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
}