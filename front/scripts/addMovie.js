const axios = require("axios");

const addMovie = async (newMovie) => {
    try {
        await axios.post("http://localhost:3000/movies", newMovie);
        console.log(`Movie added successfully: ${newMovie.title}`);
    } catch (error) {
        console.log(`Error when adding movie: ${error.message}`)
    }
};

const clearForm = (event) => {
    event.preventDefault();
    const inputs = ["title", "year", "director", "duration", "genre", "rate", "poster"];
    inputs.forEach(key => document.getElementById(`${key}Input`).value = "");
};

const submitForm = (event) => {
    event.preventDefault();

    const selectedGenres = Array.from(document.getElementById("genreInput").selectedOptions).map(option => option.value);
    const movie = {
        title: document.getElementById("titleInput").value,
        year: parseInt(document.getElementById("yearInput").value),
        director: document.getElementById("directorInput").value,
        duration: document.getElementById("durationInput").value,
        genre: selectedGenres,
        rate: parseFloat(document.getElementById("rateInput").value),
        poster: document.getElementById("posterInput").value,
    };

    const showAlert = (text, style = {}) => {
        Toastify({
            text,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#000000",
                borderRadius: '5px',
                ...style,
            },
        }).showToast();
    };

    const validUrl = (url) => {
        const urlStructure = /^(http|https):\/\/.*\.(jpeg|jpg|png)$/;
        return urlStructure.test(url);
    }

    if (!movie.title || !movie.director || !movie.duration || !movie.genre.length || !movie.poster) {
        showAlert("Missing values 😓 Please fill in all fields");
    }
    else if (isNaN(movie.year) || movie.year.toString().length !== 4) {
        showAlert("Invalid year value 😓 Please enter a valid 4-digit year");
    }
    else if (isNaN(movie.rate) || movie.rate <= 0 || movie.rate > 10) {
        showAlert("Invalid rate value 😓 Please enter a number greater than 0 and less than or equal to 10");
    }
    else if (!validUrl(movie.poster)) {
        showAlert("Invalid poster value 😓 Please enter a valid image URL");
    } else {
        addMovie(movie);
        showAlert("Movie added successfully 🥳 Check it out", { onClick: () => window.location.href = "../index.html" });
        clearForm(event);
    }
};

module.exports = { clearForm, submitForm };