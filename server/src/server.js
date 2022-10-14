const app = require("./app");
const http = require("http");
const {loadalldata} = require('./models/planets.model');
const server = http.createServer(app);
const PORT = process.envPORT || 8000;
async function start(){
  await loadalldata();
}

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
start();