import Image from "next/image";
import React from "react";
import profile from "../../public/profile.jpg";
import { FiMoreVertical, FiPhoneCall } from "react-icons/fi";
import { HiOutlineVideoCamera } from "react-icons/hi";

const PeoplesComponent = () => {
  return (
    <div>
      <div className="d-flex  my-2 align-items-center justify-content-between  ">
        <h5 className="">Peoples</h5>
        <FiMoreVertical className="cp" />
      </div>

      <input type="text" className="form-control" id="searchInput" placeholder="Search user..." />

      <h6 className="mt-5 ">Favorites</h6>

      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="d-flex align-items-center gap-2  ">
          <div>
            <Image src={profile} width={35} height={35} objectFit="cover" className="rounded-circle cp" alt="" />
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
              <small style={{ fontSize: "12px" }} className="fw-semibold text-muted">
                Last seen 6:30AM
              </small>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <small style={{ fontSize: "12px" }} className="fw-semibold  lh-sm text-muted  ">
            4
          </small>
          <div className=" d-flex gap-2">
            <FiPhoneCall className="cp" />
            <HiOutlineVideoCamera className="cp" />
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="d-flex align-items-center gap-2  ">
          <div>
            <Image src={profile} width={35} height={35} objectFit="cover" className="rounded-circle cp" alt="" />
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
              <small style={{ fontSize: "12px" }} className="fw-semibold text-muted">
                Last seen 6:30AM
              </small>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <small style={{ fontSize: "12px" }} className="fw-semibold  lh-sm text-muted  ">
            4
          </small>
          <div className=" d-flex gap-2">
            <FiPhoneCall className="cp" />
            <HiOutlineVideoCamera className="cp" />
          </div>
        </div>
      </div>

      <h6 className="mt-5">All Users</h6>

      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="d-flex align-items-center gap-2  ">
          <div>
            <Image src={profile} width={35} height={35} objectFit="cover" className="rounded-circle cp" alt="" />
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
              <small style={{ fontSize: "12px" }} className="fw-semibold text-muted">
                Joined on 27 july 2022
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

      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="d-flex align-items-center gap-2  ">
          <div>
            <Image src={profile} width={35} height={35} objectFit="cover" className="rounded-circle cp" alt="" />
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
              <small style={{ fontSize: "12px" }} className="fw-semibold text-muted">
                Joined on 27 july 2022
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

      <div className="d-flex mt-5 align-items-center justify-content-between  ">
        <h6 className="">Channels</h6>
        <FiMoreVertical className="cp" />
      </div>

      <div className="d-flex align-items-center mt-2">
        <div className="d-flex flex-column">
          <small className="fw-semibold cp">
            # <span>Web Design</span>
          </small>
          <small className="text-muted cp">Discussion about design pattern and architecture and modification learning</small>
        </div>
        <small className="fw-semibold text-muted  cp text-end">37</small>
      </div>

      <div className="d-flex align-items-center mt-2">
        <div className="d-flex flex-column">
          <small className="fw-semibold cp">
            # <span>Web Design</span>
          </small>
          <small className="text-muted cp">Discussion about design pattern and architecture and modification learning</small>
        </div>
        <small className="fw-semibold text-muted  cp text-end">37</small>
      </div>
      <div className="d-flex align-items-center mt-2">
        <div className="d-flex flex-column">
          <small className="fw-semibold cp">
            # <span>Web Design</span>
          </small>
          <small className="text-muted cp">Discussion about design pattern and architecture and modification learning</small>
        </div>
        <small className="fw-semibold text-muted  cp text-end">37</small>
      </div>
    </div>
  );
};

export default PeoplesComponent;
