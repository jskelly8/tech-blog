// Model connections
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Model relationships
// User.hasMany(Project, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
//   });
User.hasMany(Post, {
    
})