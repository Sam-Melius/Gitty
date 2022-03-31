const GithubUser = require('../models/GithubUser');
const { exchange, getUserProf } = require('../utils/gitUtils');

module.exports = class UserService {
  static async create(code) {

    const token = await exchange(code);
    const profile = await getUserProf(token);
    let user = await GithubUser.findByUsername(profile.username);

    if(!user) {
      user = await GithubUser.insert(profile);
    }
    return user;
  }

};
