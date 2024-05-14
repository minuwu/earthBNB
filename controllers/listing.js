const Listing = require("../models/listing.js");

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
    // console.log(result);
    // console.log("**********");
    if(result.error){
        next(new ExpressError(401,"Validation failed"));
    }
    let newListing = new Listing(obj.listing);
    newListing.owner = req.user._id;
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
    res.render("listings/edit.ejs", {listing});
}

module.exports.updateListing = async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
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