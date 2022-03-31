const pool = require('../utils/pool');

module.exports = class GithubUser {
  username;

  constructor(row) {
    this.username = row.github_username;
  }

  static async insert({ username }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        users (github_username)
      VALUES
        ($1)
      RETURNING
        *
      `,
      [username]
    );
    return new GithubUser(rows[0]);
  }

};
