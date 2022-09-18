import React from "react";
import ChatBar from "../components/ChatBar";
import ChatBody from "../components/ChatBody";
import ChatFooter from "../components/ChatFooter";

// const Chat = ({ socket }) => {
const Chat = () => {
  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
};

export default Chat;