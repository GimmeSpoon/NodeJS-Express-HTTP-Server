const express = require('express');
const router = express.Router();
const passport = require('passport');

/* Routes every request through /contents */
// Example of API

router.get('/', passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true
    }),(req, res)=>{
    // Authentication done!
    // Process the request to the API here.

});

module.exports = router;