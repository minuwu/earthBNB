const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const {listingSchema} = require("../schema.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");

router.route("/")
    .get(wrapAsync(listingController.listingIndex))
    .post(isLoggedIn, wrapAsync(listingController.createNewListing))

//new route: 
router.get("/new",isLoggedIn, listingController.renderNewListingForm)

router.route("/:id")
    .get( wrapAsync(listingController.showListing))
    .put( isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing))
    .delete( isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))

//edit route:
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editListing))

//index route:
// router.get("/",wrapAsync(listingController.listingIndex));
//show route:
// router.get("/:id", wrapAsync(listingController.showListing));
// router.post("/",isLoggedIn, wrapAsync(listingController.createNewListing));
//update route:
// router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing))
//delete route: 
// router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))


module.exports = router;