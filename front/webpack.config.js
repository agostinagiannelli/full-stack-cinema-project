module.exports = {
    mode: "development",
    entry: {
        index: "./scripts/index.js",
        addMovie: "./scripts/addMovie.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js",
    },
};