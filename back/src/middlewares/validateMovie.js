const validateMovie = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    
    if (!(title && year && director && duration && genre && rate && poster)) {
        return next({ message: "Middleware Error: Missing Values", statusCode: 400 });
    }
    if (typeof year !== 'number' || year < 1000 || year > 9999) {
        return next({ message: "Middleware Error: Year Not Valid", statusCode: 400 });
    }
    if (typeof rate !== 'number' || rate <= 0 || rate > 10) {
        return next({ message: "Middleware Error: Rate Not Valid", statusCode: 400 });
    } else {
        next();
    }
};

module.exports = validateMovie;

// const validateMovie = (req, res, next) => {
//     const { title, year, director, duration, genre, rate, poster } = req.body;

//     if (!title || !year || !director || !duration || !genre || !rate || !poster) {
//         return res.status(400).json({ error: "Middleware Alert: Missing Values" });
//     } if (typeof year !== 'number' || year < 1000 || year > 9999) {
//         return res.status(400).json({ error: "Middleware Alert: Year Not Valid" });
//     } if (typeof rate !== 'number' || rate <= 0 || rate > 10) {
//         return res.status(400).json({ error: "Middleware Alert: Rate Not Valid" });
//     }
//     else {
//         next();
//     }
// };