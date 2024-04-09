// class Movie {
//     constructor(id, title, year, director, duration, genre, rate, poster) {
//         this.id = id;
//         this.title = title;
//         this.year = year;
//         this.director = director;
//         this.duration = duration;
//         this.genre = genre;
//         this.rate = rate;
//         this.poster = poster;
//     };
// };

// class Repository {
//     constructor() {
//         this.movies = [];
//         this.id = 0;
//     };
//     getAllMovies() {
//         return this.movies;
//     };
//     addMovie(id, title, year, director, duration, genre, rate, poster) {
//         this.id++;
//         const movie = new Movie(this.id, title, year, director, duration, genre, rate, poster);
//         this.movies.push(movie);
//     };
// };

// const repository = new Repository();

const featMovies = document.getElementById("featuredMoviesList");

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
const renderMovies = () => {
    // featMovies.innerHTML = "";
    // const allMovies = repository.getAllMovies();
    // const items = allMovies.map(item => movieToHtml(item));
    // items.forEach(item => featMovies.append(item));
    const items = tempData.map(item => movieToHtml(item));
    items.forEach(item => featMovies.append(item));
};

renderMovies();