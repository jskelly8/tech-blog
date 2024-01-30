// Middleware to check logged in or not
const withAuth = (req, res, next) => {
    // If not logged in, redirect to login
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        // If logged in, continue
        next();
    }
};

// Export 
module.exports = withAuth;