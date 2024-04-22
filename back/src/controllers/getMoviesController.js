const moviesService = require('../services/moviesService');

const getMoviesController = async (req, res) => {
    try {
        const movies = await moviesService.getAllMovies();
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send(`Get movies controller error: ${error.message}`)
    }
};

module.exports = getMoviesController;