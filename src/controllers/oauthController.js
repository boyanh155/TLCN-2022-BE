const catchAsyncHandler = require('../middleware/async')
const ErrorHandler = require('../utils/ErrorResponse')

const passport = require('passport')
require("../utils/passportConfig")

exports.googleRedirect = passport.authenticate("google", {
    successRedirect: "/api/oauth2/google/callback",
    failureRedirect: "/api/oauth2/google/error",
    scope: ['email', 'profile'],
})

exports.googleHandler = passport.authenticate("google", {

})


exports.facebookHandler = catchAsyncHandler(async(req, res, next) => {

})