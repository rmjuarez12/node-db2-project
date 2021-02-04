//* Import the server
const server = require("./api/server");

//* Specify Port to use
const PORT = 5000;

//* Start Server
server.listen(PORT, () => {
  console.log(`\n === Server started at https://localhost:${PORT}/ ===`);
});
