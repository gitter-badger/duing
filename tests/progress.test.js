const request = require('supertest');
const app = require('../');

describe('checkbox', () => {
  it('200', (done) => {
    request(app.listen())
      .get('/progress')
      .expect(200)
      .end(() => {
        done();
      });
  });
});
