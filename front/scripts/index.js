const renderMovies = require("./renderMovies");

$.get("https://students-api.up.railway.app/movies", data => renderMovies(data)).fail(() => alert("Error when getting movies"));