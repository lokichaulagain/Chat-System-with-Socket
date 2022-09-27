// import React, { useState } from "react";
// import { useRouter } from "next/router";

// const Home = ({ socket }: any) => {
//   const router = useRouter();

//   const [userName, setUserName] = useState("");
//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     localStorage.setItem("userName", userName);
//     //sends the username and socket ID to the Node.js server
//     socket.emit("newUser", { userName, socketID: socket.id });
//     router.push("/chat");

//     //Fetching active users from socket.io
//     //create an event that listens to users when they sign in.
//   };
//   return (
//     <form className="home__container" onSubmit={handleSubmit}>
//       <h2 className="home__header">Sign in to Open Chat</h2>
//       <label htmlFor="username">Username</label>
//       <input type="text" minLength={6} name="username" id="username" className="username__input" value={userName} onChange={(e) => setUserName(e.target.value)} />
//       <button className="home__cta">SIGN IN</button>
//     </form>
//   );
// };

// export default Home;



// import React, { useEffect, useState, useRef } from "react";
// import ChatBar from "../components/ChatBar";
// import ChatBody from "../components/ChatBody";
// import ChatFooter from "../components/ChatFooter";

// const Chat = ({ socket }) => {
//   const [messages, setMessages] = useState([]);
//   const [typingStatus, setTypingStatus] = useState("");
//   const lastMessageRef = useRef(null);

//   useEffect(() => {
//     socket.on("messageResponse", (data) => setMessages([...messages, data]));
//   }, [socket, messages]);

//   useEffect(() => {
//     // 👇️ scroll to bottom every time messages change
//     lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   //listen to the typingResponse event in the ChatPage.js file and pass the data into the ChatBody.js file for display.

//   useEffect(() => {
//     socket.on("typingResponse", (data) => setTypingStatus(data));
//   }, [socket]);

//   return (
//     <div className="chat">
//       <ChatBar socket={socket} />
//       <div className="chat__main">
//         <ChatBody
//           messages={messages}
//           lastMessageRef={lastMessageRef}
//           typingStatus={typingStatus}
//         />
//         <ChatFooter socket={socket} />
//       </div>
//     </div>
//   );
// };

// export default Chat;

import React from "react";
import ChatsComponent from "../components/ChatsComponent";

function Home({socket}:any) {
  return (
    <div>
      <ChatsComponent />
    </div>
  );
}

export default Home;

