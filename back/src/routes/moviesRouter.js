const { Router } = require('express');
const moviesController = require('../controllers/moviesController');
// const validateMovie = require('../middlewares/validateMovie');

const moviesRouter = Router();

moviesRouter.get('/', moviesController);

// moviesRouter.post('/', validateMovie, moviesController);

module.exports = { moviesRouter };