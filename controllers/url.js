const shortid = require('shortid');
const Url = require('../models/url');

const handleGenerateShortUrl = async (req, res) => {
    const body = req.body;
    console.log(body)
    if(!body){
        return res.status(400).json({message: 'Url is required!'});
    }
    const shortUrl = shortid.generate();
    await Url.create({
        shortUrl: shortUrl,
        redirectUrl: body.redirectUrl,
        visitHistory: []
    })
    // res.status(200).json({
    //     id: shortUrl
    // })
    return res.status(200).render("home", {id: shortUrl});
}

const handleredirectUrl = async (req, res) => {
    const shortUrl = req.params.shortId;
    const entry = await Url.findOneAndUpdate(
    {
        shortUrl
    },
    {
        $push: {
            visitHistory: {timestamp: Date.now()},
        }
    })
    res.redirect(entry?.redirectUrl);
}

const handleAnalytics = async (req, res) => {
    const shortUrl = req.params.shortUrl;
    const result = await Url.findOne({shortUrl: shortUrl});
    return res.status(200).json({
        TotalClicks: result.visitHistory.length,
        Analytics: result.visitHistory 
    })
}

module.exports = {
    handleGenerateShortUrl,
    handleAnalytics,
    handleredirectUrl
}