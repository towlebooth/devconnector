const express = require('express');
const router = express.Router();

// @route GET api/posts
// @desc Get all 
// @access Public
/*
router.get('/', (req, res) => {
    MovieNight.find()
        .sort({ date: -1 })  //descending
        .then(movieNights => res.json(movieNights))
});
*/

// @route GET api/posts/test
// @desc Tests posts route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Posts Works"})
);

module.exports = router;