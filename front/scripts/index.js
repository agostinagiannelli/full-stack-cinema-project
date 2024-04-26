const axios = require("axios");
const renderMovies = require("./renderMovies");

const getMovies = async () => {
    try {
        const response = await axios.get("http://localhost:3000/movies");
        renderMovies(response.data);
    } catch (error) {
        console.log(`Error when getting movies: ${error.message}`)
    }
};

getMovies();

// $.get("https://students-api.up.railway.app/movies", (data, status) => renderMovies(data)).fail(() => alert("Error when getting movies"));

// const getMovies = () => {
//     axios.get("https://students-api.up.railway.app/movies")
//         .then(response => {
//             const data = response.data;
//             renderMovies(data);
//         })
//         .catch(error => { console.log(`Error when getting movies: ${error.message}`) })
// };