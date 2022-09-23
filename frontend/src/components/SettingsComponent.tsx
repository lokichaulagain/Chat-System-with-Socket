import Image from "next/image";
import React from "react";
import profile from "../../public/profile.jpg";
import { FiMoreVertical, FiPhoneCall } from "react-icons/fi";
import { HiOutlineVideoCamera } from "react-icons/hi";

const SettingsComponent = () => {
  return (
    <div>
      <div className="d-flex  my-2 align-items-center justify-content-between  ">
        <h5 className="">Settings</h5>
        <FiMoreVertical className="cp" />
      </div>
      <div className="card border-0">
        <Image src={profile} className="card-img-top" alt="" />
        <div className="mt-3">
         <div className="d-flex flex-column align-items-center ">
         <h5 className="mb-0">Lokendra Chaulagain</h5>
          <small className="fw-semibold text-muted">MERN Stack Developer</small>

         </div>
          <div className="text-success">
            <hr />
          </div>

          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column align-items-center">
              <h6>Following</h6>
              <h6>64</h6>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h6>Followers</h6>
              <h6 >64</h6>
            </div>
          </div>

          <div className="text-success">
            <hr />
          </div>
        </div>
      </div>






      <h6 className="mt-2">Following</h6>

<div className="d-flex align-items-center justify-content-between mt-3">
  <div className="d-flex align-items-center gap-2  ">
    <div>
      <Image
        src={profile}
        width={35}
        height={35}
        objectFit="cover"
        className="rounded-circle cp"
        alt=""
      />
    </div>

    <div className="lh-sm">
      <small className="fw-semibold d-flex align-items-center gap-2 cp">
        Lokendra Chaulagain{" "}
        <div
          className="rounded-pill cp"
          style={{
            height: "8px",
            width: "8px",
            backgroundColor: "green",
          }}
        ></div>{" "}
      </small>
      <div>
        <small
          style={{ fontSize: "12px" }}
          className="fw-semibold text-muted"
        >
         Mern Stack Developer
        </small>
      </div>
    </div>
  </div>

  <div className="d-flex align-items-center gap-3">
    <div className=" d-flex gap-2">
      <FiPhoneCall className="cp" />
      <HiOutlineVideoCamera className="cp" />
    </div>
  </div>
</div>









<h6 className="mt-5">Followers</h6>

<div className="d-flex align-items-center justify-content-between mt-3">
  <div className="d-flex align-items-center gap-2  ">
    <div>
      <Image
        src={profile}
        width={35}
        height={35}
        objectFit="cover"
        className="rounded-circle cp"
        alt=""
      />
    </div>

    <div className="lh-sm">
      <small className="fw-semibold d-flex align-items-center gap-2 cp">
        Lokendra Chaulagain{" "}
        <div
          className="rounded-pill cp"
          style={{
            height: "8px",
            width: "8px",
            backgroundColor: "green",
          }}
        ></div>{" "}
      </small>
      <div>
        <small
          style={{ fontSize: "12px" }}
          className="fw-semibold text-muted"
        >
           Mern Stack Developer
        </small>
      </div>
    </div>
  </div>

  <div className="d-flex align-items-center gap-3">
    <div className=" d-flex gap-2">
      <FiPhoneCall className="cp" />
      <HiOutlineVideoCamera className="cp" />
    </div>
  </div>
</div>









    </div>
  );
};

export default SettingsComponent;
