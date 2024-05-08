const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");

router.get("/signup", (req, res)=>{
    res.render("users/signup.ejs");
})

router.post("/signup", wrapAsync(async (req, res)=>{
    try {
        let {username, email, password} = req.body;
        let newUser = new User({
            email,
            username
        });
        let savedUser = await User.register(newUser,password);
        console.log(savedUser);
        req.flash("success","User registered succuessful");
        res.redirect("/listings");
    } catch (error) {
        req.flash("error", error.message);
        console.log(error.message);
        req.redirect("/signup");
    }
}));

router.get("/login", (req, res)=>{
    res.render("users/login.ejs");
});

router.post("/login",
    passport.authenticate("local",{
      failureRedirect: "/login",
      failureFlash: true  
    }),
    (req, res)=>{
        req.flash("success","Logged In Successfully!");
        res.redirect("/listings");
    }
);

module.exports = router;