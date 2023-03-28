const { text } = require("express");

const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const m = (name, text, id) => ({
  name,
  text,
  id,
});

io.on("connection", (socket) => {
  //listen from front
  socket.on("userJoined", (data, cb) => {
    if (!data.name || !data.room) {
      return cb("Error data!");
    }

    socket.join(data.room);

    //callback to front if ok
    cb({ userId: socket.id });

    socket.emit("newMessage", m("admin", `Welcome to chat ${data.name}!`));
    socket.emit("newMessage", m("test", `Welcome to chat ${data.name}!`));

    socket.broadcast
      .to(data.room)
      .emit("newMessage", m("admin", `User ${data.name}, is in chat!`));
  });

  socket.on("createMessage", (data) => {
    setTimeout(() => {
      socket.emit("newMessage", {
        text: data.text + " SERVER",
      });
    }, 500);
  });
});

module.exports = {
  app,
  server,
};
