import React, { useEffect, useState } from "react";

const ChatBar = ({ socket }: any) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data: any) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>

        <div className="chat__users">
          {users.map((user: any) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
