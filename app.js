const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/expressError.js");
const listingRoute = require("./routes/listing.js");
const listingReviewRoute = require("./routes/listingReview.js");

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

app.get("/",(req,res)=>{
    res.send("Server working");
})

app.use("/listings", listingRoute);
app.use("/listings/:id/reviews", listingReviewRoute);


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
