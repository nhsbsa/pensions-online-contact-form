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

// Did the deceased have any dependents page
router.post('/deceased-dependents-edit', (req, res) => {

    const contact = req.session.data['dependentPage']

    if (contact == 'yes') {
        res.redirect('deceased-dependents-list')
    } else {
        res.redirect('deceased-date-of-birth')

    }
});


module.exports = router;
