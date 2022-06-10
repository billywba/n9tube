/**
 * Create PORT and import modules
 */
const PORT = 8000;
const express = require('express');
const cors = require('cors');
const {google} = require('googleapis');

/**
 * Define YouTube api version and key
 */
require('dotenv').config()
const youtube = google.youtube({
  version: 'v3',
  auth: process.env.IM_THE_BEST_TROLL});
  
const app = express();
app.use(cors());

/**
 * Get search request from front-end search box
 */
app.get('/', (req, res) => {
  const query = youtube.search.list({
    part: 'snippet',
    q: req.query.search,
    maxResults: 5,

  /**
    * Logs video title and description
    */
  }).then((response) => {
    const { data } = response;
    data.items.forEach((item) => {
      res.json();
      console.log(`Title: ${item.snippet.title}\nDescription: ${item.snippet.description}\n`)
    })
  }).catch((err) => console.log(err));
})

/**
 * Creates the port listener and logs successful setup
 */
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))