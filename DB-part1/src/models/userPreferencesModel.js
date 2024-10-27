const pool = require("../db");

const UserPreferencesModel = {
  getUserPreferences: async (userId) => {
    const result = await pool.query(
      "SELECT * FROM UserPreferences WHERE UserId = $1",
      [userId],
    );
    return result.rows;
  },
  createUserPreference: async (
    userId,
    languageCode,
    preferredCommunication,
  ) => {
    const result = await pool.query(
      `INSERT INTO userPreferences 
      (UserId, LanguageCode, PreferredCommunication) 
      VALUES ($1, $2, $3) RETURNING *`,
      [userId, languageCode, preferredCommunication],
    );
    return result.rows[0];
  },
};

module.exports = UserPreferencesModel;
