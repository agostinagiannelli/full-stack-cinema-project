const renderMovies = require("./renderMovies");

// $.get("https://students-api.up.railway.app/movies", data => renderMovies(data)).fail(() => alert("Error when getting movies"));

const axios = require("axios");

const getMovies = async () => {
    try {
        const response = await axios.get("https://students-api.up.railway.app/movies");
        const data = response.data;
        renderMovies(data);
    } catch (error) {
        alert("Error when getting movies");
    }
};

getMovies();