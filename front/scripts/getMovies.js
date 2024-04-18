const axios = require("axios")

const renderMovies = require("./renderMovies")

//? jQuery
// $.get("https://students-api.up.railway.app/movies", (data, status) => renderMovies(data)).fail(() => alert("Error when getting movies"));

//? Promise
// const getMovies = () => {
//     axios.get("https://students-api.up.railway.app/movies")
//         .then(response => {
//             const data = response.data;
//             renderMovies(data);
//         })
//         .catch(error => { alert(`Error when getting movies: ${error.message}`) })
// };

//? Async/Await
const getMovies = async () => {
    try {
        const response = await axios.get("http://localhost:3000/movies");
        const data = response.data;
        renderMovies(data);
    } catch (error) { alert(`Error when getting movies: ${error.message}`) }
};

module.exports = getMovies