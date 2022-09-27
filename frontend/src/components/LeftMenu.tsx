import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsChatSquareText, BsPeopleFill, BsMoon } from "react-icons/bs";
import { FiPhoneOutgoing, FiLogOut } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import { useRouter } from "next/router";

const LeftMenu = () => {
  const router = useRouter();

  const handleLogout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("userName");
    router.push("/login");
  };

  return (
    <div className="row d-flex flex-column justify-content-between align-items-center py-4 custom-nav-dark-color ">
      <div className="col-8 d-flex flex-column gap-5 ">
        <BsChatSquareText className="menuIcon" onClick={() => router.push("/")} />
        <BiUserCircle className="menuIcon " type="button" onClick={() => router.push("/profile")} />
        <FiPhoneOutgoing className="menuIcon" type="button" onClick={() => router.push("/calls")} />
        <AiOutlineSetting className="menuIcon" type="button" onClick={() => router.push("/settings")} />
        <BsPeopleFill className="menuIcon" type="button" onClick={() => router.push("/peoples")} />
      </div>

      <div className="col-8 d-flex flex-column gap-5 ">
        <BsMoon className="menuIcon" />
        <FiLogOut className="menuIcon" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default LeftMenu;
