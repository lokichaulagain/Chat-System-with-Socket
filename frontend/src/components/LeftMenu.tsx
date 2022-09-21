import React from "react";
import { FiLogOut } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { FiPhoneOutgoing } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import { useRouter } from "next/router";

const LeftMenu = () => {
  const router = useRouter();

  return (
    <div className="row d-flex flex-column justify-content-between align-items-center py-4 custom-nav-dark-color ">
      <div className="col-8 d-flex flex-column gap-5 ">
        <BsChatSquareText
          className="menuIcon"
          onClick={() => router.push("/chats")}
        />
        <BiUserCircle
          className="menuIcon"
          onClick={() => router.push("/profile")}
        />
        <FiPhoneOutgoing
          className="menuIcon"
          onClick={() => router.push("/calls")}
        />
        <AiOutlineSetting
          className="menuIcon"
          onClick={() => router.push("/settings")}
        />
      </div>

      <div className="col-8 d-flex flex-column gap-5 ">
        <BsMoon className="menuIcon" />
        <FiLogOut className="menuIcon" onClick={() => router.push("/login")} />
      </div>
    </div>
  );
};

export default LeftMenu;
