// Imports
const router = require('express').Router();
const apiRoute = require('./api');
const homeRoute = require('./homeRoutes');

// Routing
router.use('/api', apiRoute);
router.use('/', homeRoute);

// Route for handling 404 (page not found)
router.use((req, res) => {
    res.status(404).end();
});

// Export
module.exports = router;