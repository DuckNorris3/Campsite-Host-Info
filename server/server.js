/* eslint-disable no-console */
const app = require('./app.js');

const PORT = process.env.port || 3003;

const server = app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

module.exports = server;
