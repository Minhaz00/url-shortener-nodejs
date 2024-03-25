const Url = require("../models/url");


const handleDisplayAnalytics = async( req, res ) => {
    const allUrls = await Url.find({});
    console.log(allUrls);
    return res.render('home', {urls: allUrls});
}

module.exports = {
    handleDisplayAnalytics
}