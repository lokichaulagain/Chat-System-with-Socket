import Image from "next/image";
import React from "react";
import profile from "../../public/profile.jpg";
import { FiMoreVertical } from "react-icons/fi";

const SettingsComponent = () => {
  return (
    <div>
      <div className="d-flex  my-2 align-items-center justify-content-between  ">
        <h5 className="">Settings</h5>
        <FiMoreVertical className="cp" />
      </div>
      <div className="card border-0">
        <Image src={profile} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Lokendra Chaulagain</h5>
          <p className="card-text">MERN Stack Developer</p>

          
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

          <div className="text-success">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;
