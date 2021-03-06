const router = require('express').Router();
// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
const pizzaRoutes = require('./pizza-routes');
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');
const commentRoutes = require('./comment-routes');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

// add prefix of '/api' to all of the api routes imported from the 'api' directory
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
    res.status(404).send('<h1> 404 Error!</h1>');
});

// add prefix of '/pizzas' to routes created in 'pizza-routes.js'
router.use('/pizzas', pizzaRoutes);

module.exports = router;