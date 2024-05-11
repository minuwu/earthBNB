const Listing = require("./models/listing.js");

module.exports.isLoggedIn = (req, res, next) =>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","Log In is required");
        return res.redirect("/login");
    }
    next();
}
module.exports.saveRedirectUrl = (req, res, next) =>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}
module.exports.isOwner = async (req, res, next) =>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if( !listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","you don't have the ownership of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}