// Imports
const { Post } = require('../models');

// Data Array
const posts = [
  {
    user_id: 1,
    title: 'My First Blog Post',
    content: 'This is the content of my first blog post.'
  },
  {
    user_id: 2,
    title: 'The Joys of Programming',
    content: 'Programming is like composing a symphony...'
  },
  {
    user_id: 3,
    title: 'The Art of Baking',
    content: 'Baking is not just about following a recipe...'
  },
  {
    user_id: 4,
    title: 'Cycling through the City',
    content: 'Exploring the city on two wheels can be an exhilarating experience...'
  },
  {
    user_id: 5,
    title: 'The Beauty of Photography',
    content: 'Capturing moments in time is a magical process...'
  },
  {
    user_id: 6,
    title: 'The Adventure of Hiking',
    content: 'Hiking brings you closer to nature and yourself...'
  }
];

// Function to seed data
const postData = () => Post.bulkCreate(posts);

// Export
module.exports = postData;
