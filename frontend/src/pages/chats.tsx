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


function Chats() {
  return <h1>Chats</h1>;
}

export default Chats;
