import React, { useState } from "react";
import { useRouter } from "next/router";

const Home = ({ socket }: any) => {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    //sends the username and socket ID to the Node.js server
    socket.emit("newUser", { userName, socketID: socket.id });
    router.push("/chat");

    //Fetching active users from socket.io
    //create an event that listens to users when they sign in.
  };
  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="home__cta">SIGN IN</button>
    </form>
  );
};

export default Home;
