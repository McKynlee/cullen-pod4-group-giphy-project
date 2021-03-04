const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

router.get('/', (req, res) => {
  axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: process.env.GIPHY_API_KEY,
      limit: 10,
      //send the search item to GIPHY
      q: 'test'
    }
  })
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    console.log('error getting search')
  })
});

module.exports = router;
