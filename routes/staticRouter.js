const express = require('express');
const Url = require('../models/url');
const { handleDisplayAnalytics } = require('../controllers/analytics');
const router = express.Router();


router.get('/', handleDisplayAnalytics);

module.exports = router;