const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const path = require("path");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

server.listen(4000, () => {
  console.log("server started at http://localhost:4000");
});

io.on("connection", (socket) => {
  console.log("connection Established");
});
