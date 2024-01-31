// Imports
const { User } = require('../models');

const bcrypt = require('bcrypt');

// Data Array
const users = [
  {
    name: 'johndoe',
    email: 'johndoe@example.com',
    password: bcrypt.hashSync('password123', 10)
  },
  // Add more user objects as needed
];

// Function to seed data
const userData = () => User.bulkCreate(users);

// Export
module.exports = userData;