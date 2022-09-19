import React, { useState } from "react";

const ChatFooter = ({ socket }: any) => {
  console.log(socket);

  const [message, setMessage] = useState("");
  // console.log(message);

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    console.log({ userName: localStorage.getItem("userName"), message });
    setMessage("");
  };

  //Notify others when a user is typing
  //we'll use the JavaScript onKeyDown event listener on the input field, which triggers a function that sends a message to Socket.io

  const handleTyping = () => {
    socket.emit("typing",`${localStorage.getItem("userName")} is typing`)

  };

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          //typing notify
          onKeyDown={handleTyping}
        />
        <button type="submit" className="sendBtn">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatFooter;
