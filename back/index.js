const app = require('./src/server');
const dbConnect = require('./src/config/dbConnect');

dbConnect()
    .then(() => {
        app.listen(3000, () => console.log('Server is listening on port 3000'));
    })
    .catch((error) => {
        console.log(`Server error: ${error.message}`);
    });