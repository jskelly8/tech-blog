// Imports
const { Comment } = require('../models');

// Data Array
const comments = [
  {
    post_id: 1,
    user_id: 3,
    content: 'Great post!'
  },
  {
    post_id: 2,
    user_id: 6,
    content: 'This is so true! Programming is indeed an art.'
  },
  {
    post_id: 3,
    user_id: 4,
    content: 'Loved this post! Looking forward to more.'
  },
  {
    post_id: 4,
    user_id: 5,
    content: 'Could not agree more. Baking is my stress buster!'
  },
  {
    post_id: 5,
    user_id: 1,
    content: 'Cycling is my favorite hobby too. Great post!'
  },
  {
    post_id: 6,
    user_id: 2,
    content: 'Hiking is a wonderful experience. Thanks for sharing!'
  }
];

// Function to seed data
const commentData = () => Comment.bulkCreate(comments);

// Export
module.exports = commentData;
