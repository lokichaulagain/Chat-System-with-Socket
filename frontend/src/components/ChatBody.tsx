import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import profile from "../../public/profile.jpg";

const ChatBody = ({ socket }: any) => {
  //listening the messages from socket server
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("messageResponse", (data: any) => setMessages([...messages, data]));
  }, [socket, messages]);

  //typing
  const [typingStatus, setTypingStatus] = useState("");
  useEffect(() => {
    socket.on("typingResponse", (data: any) => setTypingStatus(data));
  }, [socket]);

  return (
    <div className="py-5">
      <div className="wrapper py-5">
        {/* Sender */}
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <div className="d-flex flex-column  gap-2">
              <div className=" d-flex align-items-end  justify-content-end  gap-1">
                <div className="sender px-3 pt-2 pb-3 rounded-5 border-3 text-color" style={{ maxWidth: "75%" }}>
                  {message.text}
                </div>
                <div className="">
                  <Image src={profile} width={36} className="rounded-pill cp" height={36} alt="" />
                </div>
              </div>
              <small className="text-end mx-5  text-muted ">You 5:34AM</small>
            </div>
          ) : (
            <div className="d-flex flex-column  gap-2">
              <div className=" d-flex align-items-end gap-1 ">
                <div className="">
                  <Image src={profile} width={36} className="rounded-pill cp" height={36} alt="" />
                </div>
                <div className="recipient px-3 pt-2 pb-3 rounded-5 border-3  text-color   " style={{ maxWidth: "75%" }}>
                  {message.text}
                </div>
              </div>
              <small className="mx-5 text-muted ">{message.name} 5:34AM</small>
            </div>
          )
        )}
      </div>
      {/* Typing status */}
      <p>{typingStatus}</p>
    </div>
  );
};

export default ChatBody;
