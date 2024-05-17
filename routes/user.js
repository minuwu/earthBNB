const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controllers/user.js");

router.route("/signup")
.get( userController.renderSignUpForm)
.post( wrapAsync(userController.userSignUp))

router.route("/login")
.get( userController.renderLogInForm)
.post(
    saveRedirectUrl,
    passport.authenticate("local",{
      failureRedirect: "/login",
      failureFlash: true  
    }),
    userController.userLogIn
);

router.get("/logout", userController.userLogout);

// router.get("/signup", userController.renderSignUpForm)
// router.post("/signup", wrapAsync(userController.userSignUp));
// router.get("/login", userController.renderLogInForm);
// router.post("/login",
//     saveRedirectUrl,
//     passport.authenticate("local",{
//       failureRedirect: "/login",
//       failureFlash: true  
//     }),
//     userController.userLogin
// );


module.exports = router;