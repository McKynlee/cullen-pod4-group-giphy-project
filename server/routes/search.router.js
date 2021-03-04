const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

router.get('/:q', (req, res) => {

  let searchText = req.params.q;
  console.log('search text', searchText);

  axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: process.env.GIPHY_API_KEY,
      //send the search item to GIPHY
      q: searchText,
      limit: 10
    }
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log('error getting search', error)
    })
});

module.exports = router;
