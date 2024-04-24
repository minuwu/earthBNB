const mongoose = require("mongoose");
const Schema =  mongoose.Schema;
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
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;