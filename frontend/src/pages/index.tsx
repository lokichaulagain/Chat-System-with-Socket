import React from "react";
import ChatsComponent from "../components/ChatsComponent";

function Home({ socket }: any) {
  return (
    <div>
      <ChatsComponent />
    </div>
  );
}

export default Home;
