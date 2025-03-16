// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the User schema
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  profileImage: { type: String, default: '' } // Store the path or URL of the profile image
});

// Hash the password before saving the user
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10); // Hash the password with a salt factor of 10
  }
  next();
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
