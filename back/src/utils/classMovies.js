class Movies {
    constructor({ title, year, director, duration, genre, rate, poster }) {
        if (!title || !director || !poster) throw new Error('Empty fields, please check')
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster
    }
};

module.exports = Movies;