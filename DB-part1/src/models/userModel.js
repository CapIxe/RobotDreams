const pool = require("../db");

const UserModel = {
  getAllUsers: async () => {
    const result = await pool.query("SELECT * FROM Users");
    return result.rows;
  },
  createUser: async (name, email) => {
    const result = await pool.query(
      "INSERT INTO users (Name, Email) VALUES ($1, $2)",
      [name, email],
    );
    return result.rows[0];
  },
};

module.exports = UserModel;
