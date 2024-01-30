// Imports
const sequelize = require('../config/connection');
// const { User, Post, Comment } = require('../models');
const userData = require('./userData');
const postData = require('./postData');
const commentData = require('./commentData');

const seedDatabase = async () => {
    // Sequelize model sync
    await sequelize.sync({ force: true });
    // Seed data
    await userData();
    await postData();
    await commentData();
    // Process end
    process.exit(0);
};

// Initialize database being fully seeded
seedDatabase();