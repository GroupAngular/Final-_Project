// routes/profile.js
const express = require('express');
const multer = require('multer');
const User = require('../models/User');
const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Store uploaded files in the 'uploads' folder

// Middleware to verify JWT token
const authenticate = require('../middleware/authenticate');

// Get profile data
router.get('/', authenticate, async (req, res) => {
  const userId = req.user.userId;
  try {
    const user = await User.findById(userId);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update profile data
router.put('/', authenticate, async (req, res) => {
  const userId = req.user.userId;
  const { fullName, email, phone } = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, { fullName, email, phone }, { new: true });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Upload profile image
router.post('/upload', authenticate, upload.single('profileImage'), async (req, res) => {
  const userId = req.user.userId;
  try {
    const user = await User.findByIdAndUpdate(userId, { profileImage: req.file.path }, { new: true });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
