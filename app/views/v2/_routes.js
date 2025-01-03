// External dependencies
const e = require('express');
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// ========================================================================
// MAIN Bereavement Journey JOURNEY
// ========================================================================


// Start page
router.post(/start/, (req, res) => {
    res.redirect('date-of-birth')
});


//informant-postcode-no-result
router.post('/informant-postcode-no-result/', (req, res) => {

    const contract = req.session.data['noAddress']

    if (contract == 'change') {
        res.redirect('informant-postcode-lookup')
    } else {
        res.redirect('informant-full-address')

    }
});

//informant-postcode-lookup
router.post('/informant-postcode-lookup', (req, res) => {

    let postcode = req.session.data['enterPostcode']

    if (postcode == 'ABC 123') {
        res.redirect('informant-postcode-no-result')
    } else {
        res.redirect('informant-address-select')

    }
});

//eligibility-active-employment page
router.post('/eligibility-active-employment', (req, res) => {

    const contract = req.session.data['employment']

    if (contract == 'yes') {
        res.redirect('eligibility-contact-employer')
    } else {
        res.redirect('eligibility-recieving-pension')

    }
});

//eligibility-tell-us-once page
router.post('/eligibility-tell-us-once', (req, res) => {

    const contract = req.session.data['tellOnce']

    if (contract == 'yes') {
        res.redirect('eligibility-tell-us-once-reference')
    } else {
        res.redirect('informant-name')

    }
});

//informant-uk-main-residence page
router.post('/informant-uk-main-residence', (req, res) => {

    const select = req.session.data['main']

    if (select == 'yes') {
        res.redirect('informant-postcode-lookup')
    } else {
        res.redirect('informant-international-address')

    }
});

//deceased-dependants-confirm page
router.post('/deceased-dependants-confirm', (req, res) => {

    const contract = req.session.data['dependents']

    if (contract == 'yes') {
        res.redirect('deceased-dependants-list')
    } else {
        res.redirect('deceased-uk-main-residence')

    }
});

//deceased-uk-main-residence page
router.post('/deceased-uk-main-residence', (req, res) => {

    const check = req.session.data['uk']

    if (check == 'yes') {
        res.redirect('deceased-postcode-lookup')
    } else {
        res.redirect('deceased-international-address')

    }
});

//deceased-postcode-lookup
router.post('/deceased-postcode-lookup', (req, res) => {

    let postcode = req.session.data['enter']

    if (postcode == 'ABC 123') {
        res.redirect('deceased-postcode-no-result')
    } else {
        res.redirect('deceased-address-select')

    }
});

//informant-telephone-number page
router.post('/informant-telephone-number', (req, res) => {

    const check = req.session.data['contact']

    if (check == 'yes') {
        res.redirect('informant-preferred-contact')
    } else {
        res.redirect('informant-uk-main-residence')

    }
});





module.exports = router;
