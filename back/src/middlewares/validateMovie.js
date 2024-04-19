const validateMovie = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({ error: "Missing fields" })
    } else {
        next();
    }
};

module.exports = validateMovie;