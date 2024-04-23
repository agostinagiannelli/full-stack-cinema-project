const axios = require("axios");
const renderMovies = require("./renderMovies");

const postMovies = async (newMovie) => {
    try {
        const response = await axios.post("http://localhost:3000/movies", newMovie);
        const data = response.data;
        renderMovies(data);
    } catch (error) { alert(`Error when posting movie: ${error.message}`) }
};

module.exports = postMovies;