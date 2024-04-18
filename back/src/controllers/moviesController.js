const { getMoviesService } = require('../services/moviesService')

const moviesController = (req, res) => {
    const movies = getMoviesService()
    res.status(200).send(movies)
}

module.exports = moviesController