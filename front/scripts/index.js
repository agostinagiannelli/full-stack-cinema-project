
const featMovies = document.getElementById("featuredMoviesList");

// Get data from API
$.get("https://students-api.up.railway.app/movies", (data) => {
    renderMovies(data)
});

// Convert movie to HTML
const movieToHtml = ({ id, title, year, director, duration, genre, rate, poster }) => {
    const item = document.createElement("div");
    item.innerHTML = `
    <div class="card shadow-sm h-100">
        <img class="card-img-top object-fit-cover" height="400" src="${poster}" alt="${title}">
        <div class="card-body">
            <h5 class="card-title"><strong>${title}</strong></h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${year}</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Director: ${director}</li>
            <li class="list-group-item">Duration: ${duration}</li>
            <li class="list-group-item">Genres: ${genre[0]} · ${genre[1]} · ${genre[2]}</li>
        </ul>
        <div class="card-footer">
            <p class="card-text">⭐ ${rate}/10</p>
        </div>
    </div>
    `;
    item.classList.add("col");
    return item;
};

// Render movies
const renderMovies = (data) => {
    featMovies.innerHTML = "";
    const items = data.map(item => movieToHtml(item));
    items.forEach(item => featMovies.append(item));
};