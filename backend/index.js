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

//event that gets every active user
let users = [];
io.on("connection", (socket) => {
  console.log(`${socket.id} user just connected`);
  //listen message from frontend
  socket.on("message", (data) => {
    console.log(data);
    //sending msg to all connected users
    io.emit("messageResponse", data);
  });

  app.post("localhost:4000/api/message", async (req, res) => {
    try {
      const newMsg = new Message(req.body);
      const savedMsg = await newMsg.save();
      res.status(200).json(savedMsg);
    } catch (error) {
      console.log(error);
    }
  });

  //listening the typing response
  socket.on("typing", (data) => {
    socket.broadcast.emit("typingResponse", data);
  });

  //Listens when the new user joins the server
  socket.on("newUser", (data) => {
    //Adds the new user to the list of users
    users.push(data);
    //Sends the list of users to the client
    io.emit("newUserResponse", users);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
    //Updates the list of users when a user disconnects from the server
    users = users.filter((user) => user.socketID !== socket.id);
    // console.log(users);
    //Sends the list of users to the client
    io.emit("newUserResponse", users);
    socket.disconnect();
  });
});

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server running properly" });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
