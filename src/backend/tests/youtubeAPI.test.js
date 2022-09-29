import { expect } from 'chai';
import supertest from 'supertest';
const request = supertest('https://www.googleapis.com/youtube/v3/');

const TOKEN = '../process.env.IM_THE_BEST_TROLL';

describe('Search', () => {
    it('GET /search', (done) => {
        request.get(`search?part=snippet&q=the weeknd&key=${TOKEN}`).end((err, res) => {
            expect(res.body).to.not.be.empty;
            done()
        });
    });
});