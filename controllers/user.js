const User = require("../models/user.js");


module.exports.renderSignUpForm =  (req, res)=>{
    res.render("users/signup.ejs");
}

module.exports.userSignUp = async (req, res)=>{
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
}

module.exports.renderLogInForm = (req, res)=>{
    res.render("users/login.ejs");
}

module.exports.userLogIn = (req, res)=>{
    let redirect = res.locals.redirectUrl || "/listings";
    req.flash("success","Logged In Successfully!");
    res.redirect(redirect);
}

module.exports.userLogout = (req, res)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","Logged Out from @WL");
        res.redirect("/listings");
    })
}

