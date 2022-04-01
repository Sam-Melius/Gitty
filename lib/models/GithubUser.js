const pool = require('../utils/pool');

module.exports = class GithubUser {
  username;
  photoUrl;

  constructor(row) {
    this.username = row.github_username;
    this.photoUrl = row.photo_url;
  }

  static async insert({ username, photoUrl }) {
    const { rows } = await pool.query(
      `
        INSERT INTO
          users (github_username, photo_url)
        VALUES
          ($1, $2)
        RETURNING
          *
      `,
      [username, photoUrl]
    );
    return new GithubUser(rows[0]);
  }

};
