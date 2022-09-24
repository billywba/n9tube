const assert = require('chai').assert;
const getSearch = require("../searchResults").getSearch;

describe('search function', () => {
    it('should return 5 results', () => {
        const search = getSearch("tekken 7")
        console.log(search)
        assert.equal(search.length, 5);
    })
});