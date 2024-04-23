const { Router } = require('express');
const getMoviesController = require('../controllers/getMoviesController');
const postMoviesController = require('../controllers/postMoviesController');
const validateMovie = require('../middlewares/validateMovie');

const moviesRouter = Router();

moviesRouter.get('/', getMoviesController);
moviesRouter.post('/', validateMovie, postMoviesController);

module.exports = { moviesRouter };