// Imports
const { Comment } = require('../models');

// Data Array
const comments = [
  {
    post_id: 1,
    user_id: 1,
    content: 'Great post!'
  },
  // Add more comment objects as needed
];

// Function to seed data
const commentData = () => Comment.bulkCreate(comments);

// Export
module.exports = commentData;
