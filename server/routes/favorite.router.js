const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

// return all favorite images
router.get('/:ids', (req, res) => {

  let gifIds = req.params.ids;

  axios.get('https://api.giphy.com/v1/gifs', {
    params: {
      api_key: process.env.GIPHY_API_KEY,
      ids: gifIds
    }
  })
  .then((response) => {
    res.send(response.data);
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log('error getting favorites', error)
  })  
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  console.log('PUT req.body:', req.body, 'req.params:', req.params);

  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
