module.exports.isLoggedIn = (req, res, next) =>{
    if(!req.isAuthenticated()){
        req.flash("error","Log In is required");
        return res.redirect("/login");
    }
    next();
}