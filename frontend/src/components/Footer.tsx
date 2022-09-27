import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { FiMic } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";

const Footer = ({ socket }: any) => {
  console.log(socket);
  const [message, setMessage] = useState("");

  const handleMessageSend = (e: any) => {
    e.preventDefault();
    console.log(message);
    console.log({ userName: localStorage.getItem("userName") });
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`, //message id
        socketID: socket.id, // client id
      });
    }
    setMessage("");
  };

  return (
    <div className="col-9 ps-4 pe-5 py-3  d-flex align-items-center  border-top  position-fixed bottom-0" style={{ backgroundColor: "#f3f2f2" }}>
      <form className="col d-flex align-items-center gap-4 text-muted">
        <FiMoreHorizontal size={24} className="cp primaryColorHover" />
        <BsEmojiSmile size={20} className="cp primaryColorHover" />
        <input value={message} onChange={(e) => setMessage(e.target.value)} className="form-control p-2" id="exampleFormControlInput1" placeholder="Type message..." />
        <FiMic size={22} className="cp primaryColorHover" />
        <IoSendSharp onClick={handleMessageSend} size={22} className="cp primaryColorHover" />
      </form>
    </div>
  );
};

export default Footer;
