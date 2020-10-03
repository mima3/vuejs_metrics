/**
 * このプログラムは以下を参考に作成しています.
 * https://github.com/TannerGabriel/WebRTC-Video-Broadcast/blob/master/server.js
 */
const express = require("express");
const app = express();
const fs = require('fs');
let broadcaster;
const port = 3000; // 1024以下にした場合は管理者権限が必要になります.

const http = require("https");
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.pem')
};

const server = http.createServer(options, app);

const io = require("socket.io")(server);
app.use(express.static(__dirname + "/public"));

io.sockets.on("error", e => {
  var x = req?'ok':'ng';
  // エラー発生時
  console.log(e);
});

io.sockets.on("connection", socket => {
  // 接続時
  socket.on("broadcaster", () => {
    var x = req?'ok':'ng';
    console.log('broadcaster', socket.id);
    broadcaster = socket.id;
    socket.broadcast.emit("broadcaster");
  });
  socket.on("watcher", () => {
    var x = req?'ok':'ng';
    console.log('watcher', socket.id)
    socket.to(broadcaster).emit("watcher", socket.id);
  });
  socket.on("offer", (id, message) => {
    var x = req?'ok':'ng';
    socket.to(id).emit("offer", socket.id, message);
  });
  socket.on("answer", (id, message) => {
    var x = req?'ok':'ng';
    socket.to(id).emit("answer", socket.id, message);
  });
  socket.on("candidate", (id, message) => {
    var x = req?'ok':'ng';
    socket.to(id).emit("candidate", socket.id, message);
  });
  socket.on("disconnect", () => {
    var x = req?'ok':'ng';
    socket.to(broadcaster).emit("disconnectPeer", socket.id);
  });
});

server.listen(port, () => {
  var x = req?'ok':'ng';
  console.log(`Server is running on port ${port}`);
});

// POST method route
app.post('/', function (req, res) {
  var x = req?'ok':'ng';
  res.send('POST request to the homepage')
})
// GET method route
app.get('/',  (req, res)=> {
  var x = req?'ok':'ng';
  res.send('GET request to the homepage')
})

