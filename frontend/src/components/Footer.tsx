import React, { useState, useEffect, useRef } from "react";
import { IoSendSharp } from "react-icons/io5";
import { FiMic } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";

const Footer = ({ socket }: any) => {
  const ref = useRef(null);

  // 👇️ check if element is focused on mount
  useEffect(() => {
    if (document.activeElement === ref.current) {
      console.log("element has focus");
    } else {
      console.log("element does NOT have focus");
    }
  }, []);

  const [message, setMessage] = useState("");
  // console.log(message);
  if (message) {
    console.log(message);
  } else {
    console.log("null");
  }

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

  const [isTyping, setIsTyping] = useState(false);
  const [isNotTyping, setIsNotTyping] = useState(true);

  useEffect(() => {
    if (message) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }, [message]);

  console.log(isTyping);

  {
    isTyping ? socket.emit("typing", `${localStorage.getItem("userName")} is typing`) : !isTyping ? socket.emit("notTyping", " is not typing") : null;
  }

  return (
    <div className="col-9 ps-4 pe-5 py-3  d-flex align-items-center  border-top  position-fixed bottom-0" style={{ backgroundColor: "#f3f2f2" }}>
      <form className="col d-flex align-items-center gap-4 text-muted">
        <FiMoreHorizontal size={24} className="cp primaryColorHover" />
        <BsEmojiSmile size={20} className="cp primaryColorHover" />
        <input ref={ref} value={message} onChange={(e) => setMessage(e.target.value)} className="form-control p-2" id="exampleFormControlInput1" placeholder="Type message..." />
        <FiMic size={22} className="cp primaryColorHover" />
        <IoSendSharp onClick={handleMessageSend} size={22} className="cp primaryColorHover" />
      </form>
    </div>
  );
};

export default Footer;
