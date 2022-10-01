import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
const port = process.env.PORT || 8080;
const httpServer = createServer();

app.use(cors());
const io = new Server(
  5000,
  (httpServer,
  {
    cors: {
      origin: "http://localhost:3000",
    },
  })
);

let users = [];

io.on("connection", (socket) => {
  console.log(`${socket.id} user just connected`);

  socket.on("message", (data) => {
    console.log(data);
    io.emit("messageResponse", data);
  });

  //listening typing status
  socket.on("typing", (data) => {
    console.log(data);
    socket.broadcast.emit("typingResponse", data);
  });

  socket.on("notTyping", (data1) => {
    console.log(data1);
    socket.broadcast.emit("notTypingResponse", data1);
  });

  //NewUser joins then push to users array
  socket.on("newUser", (data) => {
    users.push(data);
    //Sends the list of users to the client
    io.emit("newUserResponse", users);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
    //Updates the list of users when a user disconnects from the server
    users = users.filter((user) => user.socketID !== socket.id);

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
