// Imports
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// // Check if the application is running on a platform with JAWSDB_URL (Heroku)
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // If not running on a platform that provides JAWSDB_URL, configure Sequelize to connect to a local MySQL database
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

// Export
module.exports = sequelize;
