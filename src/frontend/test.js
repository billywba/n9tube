/**
 * Import modules and define api version and key
 */
const {google} = require('googleapis');
const youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyAtUQa8-AUi0EqCfaGfVD491l3pbhmb_9Y'});
  
  /**
    * Function which takes a query and returns filtered search results
    */

  async function getSearchResults() {
    const res = await youtube.search.list({
      part: 'snippet',
      q: 'Tense1983 purple come back',
      maxResults: 5,

    /**
      * Logs video title and description
      */
    }).then((response) => {
      const { data } = response;
      data.items.forEach((item) => {
        console.log(`Title: ${item.snippet.title}\nDescription: ${item.snippet.description}\n`)
      })
    }).catch((err) => console.log(err));
  }

getSearchResults();