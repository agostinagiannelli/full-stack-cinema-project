require('dotenv').config();
const app = require('./src/server');
const dbConnect = require('./src/config/dbConnect');

const { PORT } = process.env;

dbConnect()
    .then(() => app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`)))
    .catch((error) => console.log(`Server error: ${error.message}`));