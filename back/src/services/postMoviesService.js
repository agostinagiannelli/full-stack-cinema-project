const Movie = require('../models/Movie');

module.exports = {
    postMovie: async (movie) => {
        try {
            const newMovie = await Movie.create(movie);
            return newMovie;
        } catch (error) {
            console.log(`Post Movies Service Error: ${error.message}`);
        }
    }
};