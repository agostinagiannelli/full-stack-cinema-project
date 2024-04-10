const featMovies = document.getElementById("featuredMoviesList");

const renderMovies = (data) => {
    const items = data.map(movie => {
        const item = document.createElement("div");
        item.classList.add("col");
        item.innerHTML = `
        <div class="card shadow-sm h-100">
            <img class="card-img-top object-fit-cover" height="400" src="${movie.poster}" alt="${movie.title}">
            <div class="card-body">
                <h5 class="card-title"><strong>${movie.title}</strong></h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${movie.year}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Director: ${movie.director}</li>
                <li class="list-group-item">Duration: ${movie.duration}</li>
                <li class="list-group-item">Genres: ${movie.genre[0]} · ${movie.genre[1]} · ${movie.genre[2]}</li>
            </ul>
            <div class="card-footer">
                <p class="card-text">⭐ ${movie.rate}/10</p>
            </div>
        </div>
        `;
        return item;
    });
    items.forEach(item => featMovies.append(item));
};

module.exports = renderMovies;