const renderMovies = require("./renderMovies");

$.get("https://students-api.up.railway.app/movies", (data, status) => {
    renderMovies(data);
});