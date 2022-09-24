import React from "react";
import { IoSendSharp } from "react-icons/io5";
import { FiMic } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="col-9 ps-4 pe-5 py-3  d-flex align-items-center  border-top  position-fixed bottom-0"
      style={{ backgroundColor: "#f3f2f2" }}
    >
      <div className="col d-flex align-items-center gap-4 text-muted">
        <FiMoreHorizontal size={24} className="cp primaryColorHover" />
        <BsEmojiSmile size={20} className="cp primaryColorHover" />
        <input
          className="form-control p-2"
          id="exampleFormControlInput1"
          placeholder="Type message..."
        />
        <FiMic size={22} className="cp primaryColorHover" />
        <IoSendSharp size={22} className="cp primaryColorHover" />
      </div>
    </div>
  );
};

export default Footer;
