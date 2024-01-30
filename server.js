// Imports 
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(session({
    secret: 'super secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
}));

// Routes
app.use(routes);

// Sequelize sync & Server start
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
