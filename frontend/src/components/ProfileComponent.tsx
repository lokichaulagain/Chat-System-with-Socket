import Image from "next/image";
import React from "react";
import profile from "../../public/profile.jpg";
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { RiSuitcaseLine } from "react-icons/ri";
import { FiMoreVertical } from "react-icons/fi";

const ProfileComponent = () => {
  return (
    <div>
      <div className="d-flex  my-2 align-items-center justify-content-between  ">
        <h5 className="">Profile</h5>
        <FiMoreVertical className="cp" />
      </div>
      <div className="card border-0">
        <Image src={profile} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Lokendra Chaulagain</h5>
          <p className="card-text">MERN Stack Developer</p>

          <div className="row gap-3">
            <button className=" col btn btn-primary btn-sm" type="button">
              Follow
            </button>
            <button className="col btn btn-primary btn-sm" type="button">
              Edit
            </button>
          </div>

          <div className="text-success">
            <hr />
          </div>

          <div className="row">
            <div className="col">
              <h5>Following</h5>
              <h5>64</h5>
            </div>
            <div className="col">
              <h5>Followers</h5>
              <h5>64</h5>
            </div>
          </div>

          <p className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit rem facere excepturi quisquam tempore quidem.
          </p>

          <div className="text-success">
            <hr />
          </div>

          <div className="row gap-3">
            <div className="col-1 d-flex flex-column gap-3">
              <BiUser size={25} />
              <HiOutlineMail size={25} />
              <GoLocation size={25} />
              <RiSuitcaseLine size={25} />
            </div>
            <div className="col d-flex flex-column gap-3">
              <p className="mb-0">Lokendra </p>
              <p className="mb-0">lokendra@gmail.com </p>
              <p className="mb-0">Kathmandu Nepal </p>
              <p className="mb-0">FalconTech IT </p>
            </div>
          </div>

          <div className="text-success">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
