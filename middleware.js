module.exports.isLoggedIn = (req, res, next) =>{
    if(!req.isAuthenticated()){
        req.flash("error","Log In is required");
        return res.redirct("/login");
    }
    next();
}