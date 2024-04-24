const moviesService = require('../services/moviesService');

module.exports = {
    getMovies: async (req, res) => {
        try {
            const movies = await moviesService.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json(`Get Movies Controller Error: ${error.message}`);
        }
    },
    createMovie: async (req, res) => {
        try {
            await moviesService.createMovie(req.body);
            res.status(201).json('New Movie Added Successfully');
        } catch (error) {
            res.status(400).json(`Create Movies Controller Error: ${error.message}`);
        }
    }
};