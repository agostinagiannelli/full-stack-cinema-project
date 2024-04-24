const axios = require("axios");

const addMovie = async (newMovie) => {
    try {
        await axios.post("http://localhost:3000/movies", newMovie);
        console.log(`Movie added successfully: ${newMovie.title}`);
    } catch (error) { console.log(`Error when adding movie: ${error.message}`) }
};

const clearForm = (event) => {
    event.preventDefault();
    const movie = {
        title: document.getElementById("titleInput"),
        year: document.getElementById("yearInput"),
        director: document.getElementById("directorInput"),
        duration: document.getElementById("durationInput"),
        genre: document.getElementById("genreInput"),
        rate: document.getElementById("rateInput"),
        poster: document.getElementById("posterInput"),
    };
    for (const key in movie) {
        movie[key].value = "";
    }
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

    const validUrl = (url) => {
        const urlStructure = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlStructure.test(url);
    }

    if (!movie.title || !movie.director || !movie.duration || !movie.genre.length || !movie.poster) {
        Toastify({
            text: "Missing values 😓 Please fill in all fields",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#000000",
                borderRadius: '5px',
            },
        }).showToast();
    }
    else if (isNaN(movie.year) || movie.year.toString().length !== 4) {
        Toastify({
            text: "Invalid year 😓 Please enter a valid 4-digit year",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#000000",
                borderRadius: '5px',
            },
        }).showToast();
    }
    else if (isNaN(movie.rate) || movie.rate <= 0 || movie.rate > 10) {
        Toastify({
            text: "Invalid rate 😓 Please enter a number greater than 0 and less than or equal to 10",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#000000",
                borderRadius: '5px',
            },
        }).showToast();
    }
    else if (!validUrl(movie.poster)) {
        Toastify({
            text: "Invalid poster URL 😓 Please enter a valid URL",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#000000",
                borderRadius: '5px',
            },
        }).showToast();
    } else {
        addMovie(movie);
        Toastify({
            text: "Movie added successfully 🥳 Check it out",
            duration: 3000,
            onClick: () => window.location.href = "../index.html",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#000000",
                borderRadius: '5px',
            },
        }).showToast();
        clearForm(event);
    }
};

module.exports = { clearForm, submitForm };