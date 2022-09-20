import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";

//connecting react app to socket.io server
import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{height:"100vh" ,overflow:"hidden"}}>
      <Component {...pageProps} socket={socket} />;
    </div>
  );
}

export default MyApp;
