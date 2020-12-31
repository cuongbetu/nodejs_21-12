const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

// Route index để cuối cùng.
router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
