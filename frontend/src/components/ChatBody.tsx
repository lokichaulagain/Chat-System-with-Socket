// import React from "react";
// import { useRouter } from "next/router";

// const ChatBody = ({ messages, lastMessageRef, typingStatus }: any) => {
//   const router = useRouter();

//   const handleLeaveChat = () => {
//     localStorage.removeItem("userName");
//     router.push("/");
//   };

//   return (
//     <>
//       <header className="chat__mainHeader">
//         <p>Hangout with Colleagues</p>
//         <button className="leaveChat__btn" onClick={handleLeaveChat}>
//           LEAVE CHAT
//         </button>
//       </header>

//       {/*This shows messages sent from you*/}
//       <div className="message__container">
//         {messages.map((message: any) =>
//           message.name === localStorage.getItem("userName") ? (
//             <div
//               className="message__chats"
//               key={message.id}
//               ref={lastMessageRef}
//             >
//               <p className="sender__name">{message.name}</p>
//               <div className="message__sender">
//                 <p>{message.text}</p>
//               </div>
//             </div>
//           ) : (
//             <div className="message__chats" key={message.id}>
//               <p>{message.name}</p>
//               <div className="message__recipient">
//                 <p>{message.text}</p>
//               </div>
//             </div>
//           )
//         )}

//         {/*This is triggered when a user is typing*/}
//         <div className="message__status">
//           <p>{typingStatus}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ChatBody;

import Image from "next/image";
import React from "react";
import profile from "../../public/profile.jpg";

const ChatBody = () => {
  return (
    <div className="py-5">
      <div className="wrapper py-5">
        {/*recipient  */}
        <div className="d-flex flex-column  gap-2">
          <div className=" d-flex align-items-end gap-1 ">
            <div className="">
              <Image
                src={profile}
                width={36}
                className="rounded-pill cp"
                height={36}
                alt=""
              />
            </div>
            <div
              className="recipient px-3 pt-2 pb-3 rounded-5 border-3 text-color"
              style={{ maxWidth: "75%" }}
            >
              hdhd7fbhsdfgf jhdf dgf
            </div>
          </div>
          <small className="mx-5 text-muted ">Lokendra 5:34AM</small>
        </div>

        {/* Sender */}
        <div className="d-flex flex-column  gap-2">
          <div className=" d-flex align-items-end  justify-content-end  gap-1">
            <div
              className="sender px-3 pt-2 pb-3 rounded-5 border-3 text-color"
              style={{ maxWidth: "75%" }}
            >
              hdhd7fbhsdfgf jhdf dgfddddddddddddddddddddddddddddddddddddddd
            </div>
            <div className="">
              <Image
                src={profile}
                width={36}
                className="rounded-pill cp"
                height={36}
                alt=""
              />
            </div>
          </div>
          <small className="text-end mx-5  text-muted ">You 5:34AM</small>
        </div>

        <div className="d-flex flex-column  gap-2">
          <div className=" d-flex align-items-end gap-1 ">
            <div className="">
              <Image
                src={profile}
                width={36}
                className="rounded-pill cp"
                height={36}
                alt=""
              />
            </div>
            <div
              className="recipient px-3 pt-2 pb-3 rounded-5 border-3  text-color   "
              style={{ maxWidth: "75%" }}
            >
              kina ra
            </div>
          </div>
          <small className="mx-5 text-muted ">Lokendra 5:34AM</small>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
