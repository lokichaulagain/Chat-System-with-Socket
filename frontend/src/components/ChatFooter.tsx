import React, { useState } from "react";

function sendNotification(message: any, userName: any) {
  const notification = new Notification("New message from Open chat", {
    icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    body: `@${userName}:${message}`,
  });
  notification.onclick = () =>
    function () {
      window.open("http://localhost:3000/chat");
    };
}

const checkPageStatus = (message: any, userName: any) => {
  console.log(message, userName);

  if (!("Notification" in window)) {
    alert("This browser does not support system notifications!");
  } else if (Notification.permission === "granted") {
    sendNotification(message, userName);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission((permission) => {
      if (permission === "granted") {
        sendNotification(message, userName);
      }
    });
  }

  //function to send notifications to all the users except the sender.
  if (userName !== localStorage.getItem("userName")) {
    if (!("Notification" in window)) {
      alert("This browser does not support system notifications!");
    } else if (Notification.permission === "granted") {
      sendNotification(message, userName);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission((permission) => {
        if (permission === "granted") {
          sendNotification(message, userName);
        }
      });
    }
  }

  //How to detect if a user is viewing your web page
  document.onvisibilitychange = () => {
    if (document.hidden) {
      const notification = new Notification("New message from Open Chat", {
        icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
        body: `@${userName}: ${message}`,
      });
      notification.onclick = () =>
        function () {
          window.open("http://localhost:3000/chat");
        };
    }
  };

  return { message, userName };
};

const ChatFooter = ({ socket }: any) => {


  const [message, setMessage] = useState("");


  // const checkPageStatus =(message, localStorage.getItem("userName"))=> {
  //   throw new Error("Function not implemented.");
  // }

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });

      //checkPageStatus runs after a message is sent to the Socket.io server. This function accepts the username and the user's message.
      checkPageStatus(message, localStorage.getItem("userName"));
    }
    console.log({ userName: localStorage.getItem("userName"), message });
    setMessage("");
  };

  const handleTyping = () => {
    socket.emit("typing", `${localStorage.getItem("userName")} is typing`);
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
