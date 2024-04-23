const getMoviesService = require('../services/getMoviesService');

const getMoviesController = async (req, res) => {
    try {
        const movies = await getMoviesService.getAllMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json(`Get Movies Controller Error: ${error.message}`);
    }
};

module.exports = getMoviesController;