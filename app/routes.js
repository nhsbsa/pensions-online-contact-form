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

//Routes for v1
router.use('/v1', require('./views/v1/_routes'));

//Routes for v2 
router.use('/v2', require('./views/v2/_routes'));

module.exports = router;
