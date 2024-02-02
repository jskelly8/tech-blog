// For comments on posts (including relations to user and post)

// Imports
const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

// Defining a new class named Comment which extends Model from Sequelize
class Comment extends Model {}; 

// Initializing the Comment model with its schema definition
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

// Export
module.exports = Comment;