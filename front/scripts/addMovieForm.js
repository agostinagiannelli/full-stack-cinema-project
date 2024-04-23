// const postMovies = require('./postMovies');

const elements = {
    title: document.getElementById("titleInput"),
    year: document.getElementById("yearInput"),
    director: document.getElementById("directorInput"),
    duration: document.getElementById("durationInput"),
    genre: document.getElementById("genreInput"),
    rate: document.getElementById("rateInput"),
    poster: document.getElementById("posterInput"),
};

const clearForm = (event) => {
    for (const key in elements) {
        elements[key].value = "";
    };
    event.preventDefault();
};

const submitForm = (event) => {
    event.preventDefault();
    const { title, year, director, duration, genre, rate, poster } = elements;

    if (!title.value || !year.value || !director.value || !duration.value || !genre.value || !rate.value || !poster.value) {
        Toastify({
            text: "Missing values, please complete all fields",
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
        for (const key in elements) {
            elements[key].value = "";
        };
        console.log('Submit form OK');
        // postMovies();
    }
};

document.getElementById("addMovieButton").addEventListener('click', submitForm);
document.getElementById("clearFormButton").addEventListener('click', clearForm);