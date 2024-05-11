const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");

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
        req.login(savedUser, ((err)=>{
            if(err) return next(err);
                req.flash("success","User registered succuessful");
                res.redirect("/listings");
        }));
    } catch (error) {
        req.flash("error", error.message);
        console.log(error.message);
        res.redirect("/signup");
    }
}));

router.get("/login", (req, res)=>{
    res.render("users/login.ejs");
});

router.post("/login",
    saveRedirectUrl,
    passport.authenticate("local",{
      failureRedirect: "/login",
      failureFlash: true  
    }),
    (req, res)=>{
        let redirect = res.locals.redirectUrl || "/listings";
        req.flash("success","Logged In Successfully!");
        res.redirect(redirect);
    }
);

router.get("/logout", (req, res)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","Logged Out from @WL");
        res.redirect("/listings");
    })
});
module.exports = router;