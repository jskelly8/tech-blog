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
  {
    name: 'AliceWonder',
    email: 'alice@example.com',
    password: bcrypt.hashSync('password123', 10)
  },
  {
    name: 'BobBuilder',
    email: 'bob@example.com',
    password: bcrypt.hashSync('password123', 10)
  },
  {
    name: 'CharlieChaplin',
    email: 'charlie@example.com',
    password: bcrypt.hashSync('password123', 10)
  },
  {
    name: 'DianaDaring',
    email: 'diana@example.com',
    password: bcrypt.hashSync('password123', 10)
  },
  {
    name: 'EvanElder',
    email: 'evan@example.com',
    password: bcrypt.hashSync('password123', 10)
  }
];

// Function to seed data
const userData = () => User.bulkCreate(users);

// Export
module.exports = userData;