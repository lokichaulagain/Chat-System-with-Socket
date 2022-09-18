const express = require("express");
const app = express();
require("dotenv").config();
const { Server } = require("socket.io");
const http = require("http").Server(app);
const cors = require("cors");
const { createSocket } = require("dgram");
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

//Create an event listener that updates an array of users on the Node.js server whenever a user joins or leaves the chat application.
let users = [];

//socket server connection check
io.on("connection", (socket) => {
  console.log(`${socket.id} user just connected`);
  //listen the message event from the React(frontend)
  //We’ve been able to retrieve the message on the server; hence, let's send the message to all the connected clients.
  socket.on("message", (data) => {
    console.log(data);
    io.emit("messageResponse", data);
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

//express
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server running properly" });
});

//port listening
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
