const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  axios.get('api.giphy.com/v1/gifs/search', {
    params: {
      api_key: process.env.GIPHY_API_KEY,
      limit: 10,
      //send the search item to GIPHY
      q: req.body
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
