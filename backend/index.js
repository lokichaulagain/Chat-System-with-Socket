const express = require("express");
const app = express();
require("dotenv").config();
const { Server } = require("socket.io");
const http = require("http").Server(app);
const cors = require("cors");
const port = process.env.PORT || 8080;

app.use(cors());

//socket server initialization at port 5000
const io = new Server(
  5000,
  (http,
  {
    cors: {
      origin: "http://localhost:3000",
    },
  })
);

//socket server connection check
io.on("connection", (socket) => {
  console.log(`${socket.id} user just connected`);
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

//express
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server running properly" });
});

//port listening
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
