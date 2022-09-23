import Image from "next/image";
import React from "react";
import profile from "../../public/profile.jpg";
import {
  FiMoreVertical,
  FiPhoneCall,
} from "react-icons/fi";
import { HiOutlineVideoCamera } from "react-icons/hi";

const ChatsComponent = () => {
  return (
    <>
      <div className="d-flex  my-2 align-items-center justify-content-between  ">
        <h5 className="">Chatting Dashboard</h5>
        <FiMoreVertical className="cp" />
      </div>

      <input
        type="text"
        className="form-control"
        id="searchInput"
        placeholder="Search user..."
      />

      <h6 className="mt-5 ">Recent Chats</h6>


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
                Last seen 6:30AM
              </small>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <small
            style={{ fontSize: "12px" }}
            className="fw-semibold  lh-sm text-muted  "
          >
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
                Last seen 6:30AM
              </small>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <small
            style={{ fontSize: "12px" }}
            className="fw-semibold  lh-sm text-muted  "
          >
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
                Last seen 6:30AM
              </small>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <small
            style={{ fontSize: "12px" }}
            className="fw-semibold  lh-sm text-muted  "
          >
            4
          </small>
          <div className=" d-flex gap-2">
          <FiPhoneCall className="cp" />
          <HiOutlineVideoCamera className="cp" />
          </div>
          
        </div>
      </div>











    </>
  );
};

export default ChatsComponent;
