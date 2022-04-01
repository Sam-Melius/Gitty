const { Router } = require('express');
const UserService = require('../services/UserService');
const { sign } = require('../utils/jwtUtils');
const authenticate = require('../middleware/authenticate');

const ONE_DAY = 1000 * 60 * 60 * 24;

module.exports = Router()

  .get('/login', (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=user&redirect_uri=http://localhost:7890/api/v1/auth/login/callback`);
  })

  .get('/login/callback', async (req, res, next) => {
    try {
      const user = UserService.create(req.query.code); 
      res.cookie(process.env.COOKIE_NAME, sign(user), {
        httpOnly: true,
        macAge: ONE_DAY,
      })
        .redirect('/');  
    } catch (error) {
      next(error);
    }
  })

  .get('/verify', authenticate, (req, res) => {
    res.send(req.user);
  })

;
