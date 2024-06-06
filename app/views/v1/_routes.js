// External dependencies
const e = require('express');
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// ========================================================================
// MAIN ONLINE CONTACT FORM JOURNEY
// ========================================================================


// Start page
router.post(/start/, (req, res) => {
    res.redirect('date-of-birth')
});

// What is your date of birth?
router.post(/date-of-birth/, (req, res) => {
    res.redirect('previous-contracts')
});


module.exports = router;
