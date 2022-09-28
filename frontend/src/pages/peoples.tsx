import React, { useState, useEffect } from "react";
import PeoplesComponent from "../components/PeoplesComponents";

export default function Peoples({ socket }: any) {
  console.log(socket);
  //active users
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data: any) => setActiveUsers(data));
    console.log(activeUsers);
  }, [socket, activeUsers]);

  console.log(activeUsers);

  return (
    <div>
      <PeoplesComponent activeUsers={activeUsers} />
    </div>
  );
}
