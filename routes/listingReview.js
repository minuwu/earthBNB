const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const {reviewSchema} = require("../schema.js");


//validation for review route
const validateReview = (req,res,next) =>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(401,errMsg);
    }else{
        next();
    }
}
//create review : route
router.post("/",validateReview, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let result = new Review(req.body.review);
    let listing = await Listing.findById(id);
    listing.reviews.push(result);
    await result.save();
    await listing.save();
    req.flash("success","New Review Created!");
    res.redirect(`/listings/${id}`);
}));
router.delete("/:reviewId", wrapAsync( async (req,res)=>{
    let {id, reviewId} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {$pull: { reviews: reviewId}});
    await listing.save();
    // console.log(listing);
    let result = await Review.findByIdAndDelete(reviewId);
    // console.log(result);
    req.flash("success","Review Deleted!");
    res.redirect(`/listings/${id}`);
}))


module.exports = router;