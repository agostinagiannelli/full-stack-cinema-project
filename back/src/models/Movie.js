const mongoose = require('mongoose');

const movie = {
    title: { type: String, required: true, unique: true },
    year: { type: Number, required: true },
    director: { type: String, required: true },
    duration: { type: String, required: true },
    genre: { type: Array, required: true },
    rate: { type: Number, required: true },
    poster: { type: String, required: true, unique: true }
};

const movieSchema = new mongoose.Schema(movie);

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;