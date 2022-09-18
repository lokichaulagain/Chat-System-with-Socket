import React, { useState } from "react";

const ChatFooter = () => {
  const [message, setMessage] = useState("");
  // console.log(message);

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    console.log({ userName: localStorage.getItem("userName"), message });
    setMessage("");
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
        />
        <button type="submit" className="sendBtn">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatFooter;
