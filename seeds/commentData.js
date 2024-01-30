// Imports
const { Comment } = require('../models');

// Data Array
const comments = [
  {
    post_id: 1,
    user_id: 1,
    commentText: 'Great post!',
    createdAt: new Date(),
  },
  // Add more comment objects as needed
];

// Function to seed data
const commentData = () => Post.bulkCreate(comments);

// Export
module.exports = commentData;
