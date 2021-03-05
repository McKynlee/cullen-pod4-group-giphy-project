const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {

  const queryText = `SELECT * FROM favorites`

  pool.query(queryText)
    .then((result) => { 
      console.log('GET favorite result:', result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error getting favorite from DB', error);
      res.sendStatus(500);
    })
});

// add a new favorite
router.post('/', (req, res) => {
  const favoriteUrl = req.body;

  const queryText = `INSERT INTO favorites ("giphy_url") VALUES ($1)`;
  
  pool.query(queryText, [favoriteUrl])
    .then(() => {
      res.sendStatus(200); })
    .catch((err) => {
      console.log('error posting', err); 
      res.sendStatus(500);
  })
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
