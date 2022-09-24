// import "../styles/globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import type { AppProps } from "next/app";

// //connecting react app to socket.io server
// import { io } from "socket.io-client";
// const socket = io("http://localhost:5000");

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <div style={{height:"100vh" ,overflow:"hidden"}}>
//       <Component {...pageProps} socket={socket} />;
//     </div>
//   );
// }

// export default MyApp;

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

//connecting react app to socket.io server
import { io } from "socket.io-client";
import LeftMenu from "../components/LeftMenu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatBody from "../components/ChatBody";
const socket = io("http://localhost:5000");

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const location = router.pathname.split("/")[1];
  console.log(location);

  return (
    // <div style={{height:"100vh" ,overflow:"hidden"}}>
    //   <Component {...pageProps} socket={socket} />;
    // </div>

    <div className="row m-0">
      <div className="col-1">
        <LeftMenu />
      </div>
      <div className="col-2" style={{ height: "100vh", overflowY: "scroll" }}>
        <Component {...pageProps} socket={socket} />
      </div>

      <div className="col-9 " style={{ height: "100vh", overflowY: "scroll" }}>
        <Navbar />
        <ChatBody/>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
