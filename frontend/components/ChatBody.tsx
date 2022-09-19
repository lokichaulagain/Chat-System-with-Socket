import React from "react";
import { useRouter } from "next/router";

const ChatBody = ({ messages, lastMessageRef, typingStatus }: any) => {
  const router = useRouter();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    router.push("/");
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      {/*This shows messages sent from you*/}
      <div className="message__container">
        {messages.map((message: any) =>
          message.name === localStorage.getItem("userName") ? (
            <div
              className="message__chats"
              key={message.id}
              ref={lastMessageRef}
            >
              <p className="sender__name">{message.name}</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        {/*This is triggered when a user is typing*/}
        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
      </div>
    </>
  );
};

export default ChatBody;
