const http = require("http");
const port = 3010;
const app = require("./app");
const server = http.createServer(app);

server.listen(port, () => {
  console.log("Listenig on port", port);
});
