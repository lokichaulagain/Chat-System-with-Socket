import React, { useEffect, useState, useRef } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import LeftMenu from "../components/LeftMenu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatBody from "../components/ChatBody";
import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const location = router.pathname.split("/")[1];
 

  return (
    <>
      {location == "login" ? (
        <div style={{ height: "100vh", overflow: "hidden" }}>
          <Component {...pageProps} socket={socket} />;
        </div>
      ) : location == "register" ? (
        <div style={{ height: "100vh", overflow: "hidden" }}>
          <Component {...pageProps} socket={socket} />;
        </div>
      ) : (
        <div className="row m-0">
          <div className="col-1">
            <LeftMenu />
          </div>
          <div className="col-2" style={{ height: "100vh", overflowY: "scroll" }}>
            <Component {...pageProps} socket={socket} />
          </div>

          <div className="col-9 " style={{ height: "100vh", overflowY: "scroll" }}>
            <Navbar />
            <ChatBody socket={socket} />
            <Footer socket={socket} />
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;
