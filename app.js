if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
const SECRET =  process.env.SECRET;
const MONGO_URL = process.env.MONGO_URL;
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/expressError.js");
const listingRoute = require("./routes/listing.js");
const listingReviewRoute = require("./routes/listingReview.js");
const userRoute = require("./routes/user.js");
const MongoStore = require("connect-mongo");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.engine("ejs", ejsMate);
app.use(express.json());

const store = MongoStore.create({
    mongoUrl : MONGO_URL,
    crypto: {
        secret: SECRET
    },
    touchAfter: 24*3600
})

const sessionOptions = {
    store: store,
    secret: SECRET,
    resave: false,
    saveUninitialized: true
};
store.on("error",(error)=>console.log(error));
app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

main()
    .then(res => console.log("Mongoose: Connection Successful: ", res))
    .catch(err => console.log("Mongoose: Connection Failed: ", err));
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res)=>{
    res.send("Server working");
})

app.use((req, res, next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

app.use("/listings", listingRoute);
app.use("/listings/:id/reviews", listingReviewRoute);
app.use("/", userRoute);

app.all("*", (req,res,next)=>{
    next(new ExpressError(404,"Page Not Found"))
})

//error handling middleware
app.use((err, req, res, next)=>{
    let { statusCode= 500, message= "Something went wrong" } = err;
    console.log(`Handler: ErrCode ${statusCode} | ErrMsg ${message} || ${req.originalUrl}`);
    // res.status(statusCode).send(message);
    res.status(statusCode).render("listings/error.ejs",{message});
})

app.listen(PORT,(req,res)=>{
    console.log("Express: App listening on port: ",PORT);
})
