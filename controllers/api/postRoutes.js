// Imports
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Routes
// All posts (associated user) Route --- Fetches all posts along with the associated user information.
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                { model: User, attributes: ['name'] }
            ]
        });
        res.status(200).json(postData);
    } catch (error) {
        res.status(500).json(error);
    }
});

// One post (by id, associated user and comments) Route --- Fetches a single post by ID, including the associated user and comments.
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ['name'] },
                { model: Comment, include: [{ model: User, attributes: ['name'] }] }
            ]
        });
        if (!postData) {
            res.status(404).json({ message: 'Post not found.' });
            return;
        };
        res.status(200).json(postData);
    } catch (error) {
        res.status(500).json(error);
    }
});

// New Post (auth user) Route --- Creates a new post, restriced to authenticated users. The user ID is taken from the session.
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(newPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Edit Existing Post (auth user) Route --- Updates a post specified by ID, restricted to the user who created the post.
router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        });
        if (!postData) {
            res.status(404).json({ message: 'Post not found.' });
            return;
        };
        res.status(200).json(postData);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Delete Existing Post (auth user) Route --- Deletes a post specified by ID, restricted to the owner of the post.
router.delete('/:id', withAuth, async(req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        });
        if (!postData) {
            res.status(404).json({ message: 'Post not found' });
            return;
        };
        res.status(200).json(postData);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Export
module.exports = router;