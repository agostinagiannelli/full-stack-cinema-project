const postMoviesService = require('../services/postMoviesService');

const postMoviesController = async (req, res) => {
    try {
        await postMoviesService.postMovie(req.body);
        res.status(201).json('New movie created');
    } catch (error) {
        res.status(400).json(`Post Movies Controller Error: ${error.message}`);
    }
};

module.exports = postMoviesController;