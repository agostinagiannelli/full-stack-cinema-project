const moviesService = require('../services/moviesService');
const catchAsync = require('../utils/catchAsync')

const getMovies = async (req, res) => {
    const movies = await moviesService.getMovies();
    res.status(200).json(movies);
};

const createMovie = async (req, res) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const newMovie = await moviesService.createMovie({ title, year, director, duration, genre, rate, poster });
    res.status(201).json(`New Movie Added Successfully: ${newMovie.title}`);
};

module.exports = {
    getMovies: catchAsync(getMovies),
    createMovie: catchAsync(createMovie)
};

// module.exports = {
//     getMovies: async (req, res) => {
//         try {
//             const movies = await moviesService.getMovies();
//             res.status(200).json(movies);
//         } catch (error) {
//             res.status(500).json(`Get Movies Controller Error: ${error.message}`);
//         }
//     },
//     createMovie: async (req, res) => {
//         try {
//             const { title, year, director, duration, genre, rate, poster } = req.body;
//             const newMovie = await moviesService.createMovie({ title, year, director, duration, genre, rate, poster });
//             res.status(201).json(`New Movie Added Successfully: ${newMovie.title}`);
//         } catch (error) {
//             res.status(400).json(`Create Movies Controller Error: ${error.message}`);
//         }
//     }
// };