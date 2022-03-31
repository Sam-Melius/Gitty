const GithubUser = require('../models/GithubUser');

module.exports = class UserService {
  static async create() {
      let user = await GithubUser.findByUsername(username)
  }

};
