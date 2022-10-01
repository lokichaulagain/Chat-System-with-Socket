import React, { useState, useEffect } from "react";
import PeoplesComponent from "../components/PeoplesComponents";

export default function Peoples({ socket }: any) {

  //active users
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data: any) => setActiveUsers(data));

  }, [socket, activeUsers]);



  return (
    <div>
      <PeoplesComponent activeUsers={activeUsers} />
    </div>
  );
}
