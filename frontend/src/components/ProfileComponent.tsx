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
    <>
      <div className="d-flex  my-2 align-items-center justify-content-between  ">
        <h5 className="">Profile</h5>
        <FiMoreVertical className="cp" />
      </div>

      <div className="card border-0">
        <Image src={profile} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="mb-0">Lokendra Chaulagain</h5>
          <small className="fw-semibold text-muted">MERN Stack Developer</small>

          <div className="row gap-3 mt-3">
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
              <h6>Following</h6>
              <h6>64</h6>
            </div>
            <div className="col">
              <h6>Followers</h6>
              <h6>64</h6>
            </div>
          </div>

          <small className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit rem facere excepturi quisquam tempore quidem.</small>

          <div className="text-success">
            <hr />
          </div>

          <div className="row gap-3">
            <div className="d-flex align-items-center gap-2">
              <BiUser size={22} />
              <p className="mb-0 ">Lokendra Chaulagain </p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <HiOutlineMail size={22} />
              <p className="mb-0">lokendra@gmail.com </p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <GoLocation size={22} />
              <p className="mb-0">Kathmandu Nepal </p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <RiSuitcaseLine size={22} />
              <p className="mb-0">FalconTech IT </p>
            </div>
          </div>

          <div className="text-success">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
