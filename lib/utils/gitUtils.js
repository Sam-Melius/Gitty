const fetch = require('cross-fetch');

const exchange = async (code) => {
  const res1 = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.nextTick.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code,
    }),
  });
  const { access_token } = await res1.json();
  return access_token;
};

const getUserProf = async (token) => {
  const profileRes = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  const { login } = await profileRes.json();
  return { username: login };
};

module.exports = { exchange, getUserProf };
