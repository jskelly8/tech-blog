// Imports
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Routes
// Add New Comment Route --- Creates a new comment, restriced to authenticated users.
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body, 
            user_id: req.session.user_id
        });
        res.status(200).json(newComment);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Export
module.exports = router;