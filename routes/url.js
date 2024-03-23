const express = require('express');
const router = express.Router();
const {handleGenerateShortUrl, handleAnalytics, handleredirectUrl} = require('../controllers/url');

router.post('/', handleGenerateShortUrl);
router.get('/analytics/:shortUrl', handleAnalytics);
router.get('/:shortId', handleredirectUrl);
module.exports = router;