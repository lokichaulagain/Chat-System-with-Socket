import Image from "next/image";
import React from "react";
import profile from "../../public/profile.jpg";
import { FiMoreVertical, FiPhoneCall } from "react-icons/fi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BsInfoCircleFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div
      className="col-9 ps-4 pe-5 py-3  d-flex align-items-center border-bottom position-fixed"
      style={{ backgroundColor: "#f3f2f2" }}
    >
      <div className="d-flex gap-2">
        <div>
          <Image
            src={profile}
            className="rounded-circle cp"
            width={40}
            height={40}
            alt=""
          />
        </div>
        <div className="">
          <h5 className="mb-0 cp primaryTxtColor primaryColorHover ">Lokendra Chaulagain</h5>
          <small className="text-muted fw-semibold"> Active now  || Active 5min ago</small>
        </div>
      </div>
      <div className="col d-flex align-items-center justify-content-end gap-4 text-muted">
        <input
          className="form-control  w-25"
          id="exampleFormControlInput1"
          placeholder="Search conversation"
        />
        <FiPhoneCall size={20} className="cp primaryColorHover" />
        <HiOutlineVideoCamera size={22} className="cp primaryColorHover" />
        <BsInfoCircleFill size={20} className="cp primaryColorHover" />
        <FiMoreVertical size={22} className="cp primaryColorHover" />
      </div>
    </div>
  );
};

export default Navbar;
