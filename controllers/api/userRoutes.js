// Imports
const router = express.Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const session = require('express-session');

// Routes
// All Users Route --- Fetches all users from the database.
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] }
        });
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json(error);
    }
});

// New User SignUp Route --- Creates a new user with the provided credentials. Passwords are hashed before storing in the database. The user is also logged in immediately after signing up.
router.post('/signup', async (req, res) => {
    try {
        const hashPass = bcrypt.hashSync(req.body.password, [10]);
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashPass
        });
        req.session.save(() => {
            req.session.user_id = new user_id;
            req.session.logged_in = true;
            res.status(200).json(newUser);
        });
    } catch (error) {
        res.status(500).json(error);
    }
})

// Login Existing User Route -- Authenticates a user by checking the provided email and password. 
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            where: { email: req.body.email, name: req.body.name }
        });
        if (!user) {
            res.status(400).json({ message: 'No User Found' });
            return;
        };

        const validPass = bcrypt.compareSync(req.body.password, user.password);
        if (!validPass) {
            res.status(400).json({ message: 'Incorrect password' });
            return;
        };

        req.session.save(() => {
            req.session.user_id = user_id;
            req.session.logged_in = true;
            res.json({ user: name, message: 'Logged In' });
        });

    } catch (error) {
        res.status(500).json(error);
    }
});

// Logout Existing User Route --- Destroys the session if a logged-in user attempts to log out.
router.post('/logout', (req, res) => {
    try {
        if (req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(404).end();
        };
    } catch (error) {
        res.status(500).json(error);
    }
});

// Export
module.exports = router;
