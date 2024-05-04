const mongoose = require("mongoose");
const Schema =  mongoose.Schema;
const Review = require("./review.js");
const IMG = "https://images.unsplash.com/photo-1486523834155-1dabf4edaa64?q=80&w=1531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: IMG,
        set: (u) => u===""? IMG : u 
    },
    price: {
        type: Number,
        default: 3
    },
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

listingSchema.post("findOneAndDelete", async (listing)=>{
    // console.log(listing);
    if(listing.reviews){
        let result = await Review.deleteMany({_id: {$in: listing.reviews}});
        console.log("ListingSchema Post Middleware : \n", result);
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;