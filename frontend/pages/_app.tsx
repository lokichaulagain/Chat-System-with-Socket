import "../styles/globals.css";
import type { AppProps } from "next/app";
import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
