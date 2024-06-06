// External dependencies
const express = require('express');
const router = express.Router();

// clear session data - link in footer
router.post('/clear-session-data/', (req, res) => {
    req.session.data = {}
    res.render('index')
})

// =======================================
// Version Routes Files Below
// =======================================

router.use('/v1', require('./views/v1/_routes'));

module.exports = router;
