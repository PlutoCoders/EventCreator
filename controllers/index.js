const router = require('express').Router();

// router for events(Post Put Delete) + Homepage (Get Routes)

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
