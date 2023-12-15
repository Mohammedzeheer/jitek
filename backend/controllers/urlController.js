const urlCollection= require('../models/urlModel')
const validUrl = require('valid-url');
const shortid = require('shortid');


const shorten =async(req, res) => {
    const { originalUrl } = req.body;
    // console.log(`originalUrl`,originalUrl)

    if (!validUrl.isUri(originalUrl)) {
      return res.status(400).json('Invalid URL');
    }
  
    try {
      let url = await urlCollection.findOne({ originalUrl });
  
      if (url) {
        return res.json(url);
      } else {
        const shortUrl = shortid.generate();

        url = new urlCollection({
          originalUrl,
          shortUrl,
        });
  
        await url.save();
        return res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json('Server error');
    }
  };
  

const shortCode= async (req, res) => {
    const { shortenedUrl } = req.query;
    console.log( `req.query---------`,shortenedUrl);
    try {
      const url = await urlCollection.findOne({ shortUrl: shortenedUrl });
      return res.json(url);
    } catch (err) {
      console.log(err);
      res.status(500).json('Server error');
    }
  };

  const shortcode= async (req, res) => {
    const { shortCode } = req.params;
    try {
      const url = await urlCollection.findOne({ shortUrl: `http://localhost:3000/${shortCode}` });  
  
      if (url) {
        return res.redirect(url.originalUrl);
      } else {
        return res.status(404).json('URL not found');
      }
    } catch (err) {
      console.log(err);
      res.status(500).json('Server error');
    }
  };


  module.exports = {shorten,shortCode,shortcode}