const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const GithubUser = require('../lib/models/GithubUser');

jest.mock('../lib/middleware/authenticate.js', () => {
  return (req, res, next) => {
    req.user = {
      username: 'test',
      photoUrl: 'http://image.com/image.png'
    };
    next();
  };
});

describe('Gitty routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });
  

  

  // it('creates a user', async () => {
  //   const user = await GithubUser.insert({
  //     username: 'wally',
  //     photoUrl: 'http://image.com/image.png'
  //   });
  //   const res = await request(app)
  //     .post('/api/v1/githubUsers/login/callback')
  //     .send({ username: 'wally', photoUrl: 'http://image.com/image.png' });
  //   expect(res.body).toEqual({ user });
    
    
  // });

  // it('should redirect to github oauth page', async () => {
  //   const req = await request(app).get('/api/v1/github/login');
  //   expect(req.header.location).toMatch(
  //     /https:\/\/github.com\/login\/oauth\/authorize\?client_id=[\w\d]+&scope=user&redirect_uri=http:\/\/localhost:7890\/api\/v1\/github\/login\/callback/i
  //   );
  // });

});
