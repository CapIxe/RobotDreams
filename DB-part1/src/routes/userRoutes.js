const express = require('express');
const router = express.Router();
const UserService = require('../services/userService');

router.get('/', async (req, res) => {
  try {
    const users = await UserService.getUsers();
    res.json(users);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await UserService.createUser(name, email);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:userId/preferences', async (req, res) => {
  const { userId } = req.params;
  try {
    const preferences = await UserService.getUserPreferences(userId);
    res.json(preferences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/:userId/preferences', async (req, res) => {
  const { userId } = req.params;
  const { languageCode, preferredCommunication } = req.body;
  try {
    const newPreference = await UserService.createUserPreference(userId, languageCode, preferredCommunication);
    res.json(newPreference);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
