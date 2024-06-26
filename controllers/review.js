const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview = async (req,res)=>{
    let {id} = req.params;
    let result = new Review(req.body.review);
    result.author = req.user._id;
    // console.log(result);
    let listing = await Listing.findById(id);
    listing.reviews.push(result);
    await result.save();
    await listing.save();
    req.flash("success","New Review Created!");
    res.redirect(`/listings/${id}`);
}
module.exports.destroyReview =  async (req,res)=>{
    let {id, reviewId} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {$pull: { reviews: reviewId}});
    await listing.save();
    // console.log(listing);
    let result = await Review.findByIdAndDelete(reviewId);
    // console.log(result);
    req.flash("success","Review Deleted!");
    res.redirect(`/listings/${id}`);
}