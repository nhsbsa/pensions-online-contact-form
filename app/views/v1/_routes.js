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


module.exports = router;
