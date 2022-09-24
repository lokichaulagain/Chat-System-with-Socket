import Image from "next/image";
import React from "react";
import profile from "../../public/profile.jpg";
import { FiMoreVertical, FiArrowUpRight, FiArrowDownLeft, FiPhoneCall } from "react-icons/fi";
import { HiOutlineVideoCamera } from "react-icons/hi";

const CallsComponent = () => {
  return (
    <>
      <div className="d-flex  my-2 align-items-center justify-content-between  ">
        <h5 className="">Video / Audio Calls</h5>
        <FiMoreVertical className="cp" />
      </div>

      <input type="text" className="form-control" id="searchInput" placeholder="Search user..." />

      <h6 className="mt-5 ">Recent Calls</h6>

      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="d-flex align-items-center gap-2  ">
          <div>
            <Image src={profile} width={35} height={35} objectFit="cover" className="rounded-circle" alt="" />
          </div>

          <div className="lh-sm">
            <small className="fw-semibold">Lokendra Chaulagain</small>
            <div>
              <FiArrowUpRight className="fw-semibold text-muted" />
              <small style={{ fontSize: "12px" }} className="fw-semibold text-muted">
                17 May 2022 6:30AM
              </small>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <small style={{ fontSize: "12px" }} className="fw-semibold text-muted">
            1.57AM
          </small>
          <FiPhoneCall className="cp" />
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="d-flex align-items-center gap-2  ">
          <div>
            <Image src={profile} width={35} height={35} objectFit="cover" className="rounded-circle" alt="" />
          </div>

          <div className="lh-sm">
            <small className="fw-semibold">Lokendra Chaulagain</small>
            <div>
              <FiArrowDownLeft className="fw-semibold text-muted" />
              <small style={{ fontSize: "12px" }} className="fw-semibold text-muted">
                17 May 2022 6:30AM
              </small>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <small style={{ fontSize: "12px" }} className="fw-semibold text-muted">
            1.57AM
          </small>
          <HiOutlineVideoCamera className="cp" />
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="d-flex align-items-center gap-2  ">
          <div>
            <Image src={profile} width={35} height={35} objectFit="cover" className="rounded-circle" alt="" />
          </div>

          <div className="lh-sm">
            <small className="fw-semibold">Lokendra Chaulagain</small>
            <div>
              <FiArrowUpRight className="fw-semibold text-muted" />
              <small style={{ fontSize: "12px" }} className="fw-semibold text-muted">
                17 May 2022 6:30AM
              </small>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <small style={{ fontSize: "12px" }} className="fw-semibold text-muted">
            1.57AM
          </small>
          <FiPhoneCall className="cp" />
        </div>
      </div>
    </>
  );
};

export default CallsComponent;
