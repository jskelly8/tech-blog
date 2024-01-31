// Imports
const { Post } = require('../models');

// Data Array
const posts = [
  {
    user_id: 1,
    title: 'My First Blog Post',
    content: 'This is the content of my first blog post.'
  },
];

// Function to seed data
const postData = () => Post.bulkCreate(posts);

// Export
module.exports = postData;
