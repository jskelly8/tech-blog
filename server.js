const express = require('express');
const session = require('express-session');
const { sequelize } = require('./models'); // assuming Sequelize models are in 'models' directory

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'super secret',
    resave: false,
    saveUninitialized: true,
}));

// Routes
// Define your routes here, e.g., app.use('/api/users', require('./routes/userRoutes'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
