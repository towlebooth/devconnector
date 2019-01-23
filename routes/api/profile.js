const express = require('express');
const router = express.Router();

// @route GET api/profile
// @desc Get all 
// @access Public
/*
router.get('/', (req, res) => {
    MovieNight.find()
        .sort({ date: -1 })  //descending
        .then(movieNights => res.json(movieNights))
});
*/

// @route GET api/profile/test
// @desc Tests profile route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Profile Works"})
);

module.exports = router;