// Imports
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Routes
// Homepage Route -- Fetches all posts and renders the homepage view.
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ['name'] }]
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', { title: 'Home Page', posts, loggedIn: req.session.logged_in });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Login Route -- Renders the login view. Redirects to the dashboard if the user is already logged in.
router.get('/login', (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/dashboard');
            return;
        };
        res.render('login', { title: 'Login', loggedIn: req.session.logged_in });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Signup Route -- Renders the signup view.
router.get('/signup', (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/dashboard');
            return;
        };
        res.render('signup', { title: 'SignUp', loggedIn: req.session.logged_in });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Dashboard (all blogs by current user) Route -- Fetches all posts by the currently logged-in user and renders the dashboard view.
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userPost = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [{ model: User, attributes: ['name'] }]
        });
        const posts = userPost.map((post) => post.get({ plain: true }));
        res.render('dashboard', { title: 'Dashboard', posts, loggedIn: req.session.logged_in });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Specific blog Route -- Fetches a specific blog post by its ID along with its comments and the associated users, then renders a view for the individual post.
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ['name'] },
                { model: Comment, include: [{ model: User, attributes: ['name'] }] }
            ]
        });
        if (postData) {
            const posts = postData.get({ plain: true });
            res.render('post', {title: 'Blog Post', ...posts, loggedIn: req.session.logged_in });
        } else {
            res.status(404).json({ message: 'Post not found.'});
        };
    } catch (error) {
        res.status(500).json(error);
    }
});

// Add-new post Route -- Renders a view to create a new blog post, restricted to authenticated users.
router.get('/newpost', withAuth, (req, res) => {
    try {
            res.render('newpost', { title: 'New Post', loggedIn: req.session.logged_in });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Edit-existing post Route -- Fetches a specific post for editing and renders the edit post view.
router.get('/editpost/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ['name'] },
                { model: Comment, include: [{ model: User, attributes: ['name'] }] }
            ]
        });
        if (postData) {
            const posts = postData.get({ plain: true });
            res.render('post', { title: 'Update Post', ...posts, loggedIn: req.session.logged_in });
        } else {
            res.status(404).json({ message: 'Post not found.' });
        };
    } catch (error) {
        res.status(500).json(error);
    }
});


// Export
module.exports = router;