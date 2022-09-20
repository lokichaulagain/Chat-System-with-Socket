import React from "react";
import { useRouter } from "next/router";
import { FaUserAlt } from "react-icons/fa";

function ForgotPasswordComponent() {
  const router = useRouter();

  return (
    <div className="custom-bg-primary p-5 h100vh ">
      <div className="row ">
        <div className="col-3">
          <h5>Chat App</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, vel!
          </p>
        </div>
        <div
          className="col-9 custom-bg-card-white rounded-3 pt-5 px-5  d-flex justify-content-center"
          style={{ height: "90vh" }}
        >
          <form action="" className="col-5">
            <div className="d-flex flex-column gap-2 align-items-center justify-content-center">
              <div
                className="p-4 rounded-circle"
                style={{ backgroundColor: "#dceee2" }}
              >
                <FaUserAlt
                  className="rounded-circular"
                  color="4EAD6C"
                  size={40}
                />
              </div>
              <h3>Reset Password</h3>
              <h6>Reset Your Password with Doot.</h6>
            </div>

            <input
              className="form-control rounded-1 py-2 my-3 mb-4 "
              placeholder="Enter your Email and instructions will be sent to you!"
              id="disabledTextInput"
              disabled
              style={{ backgroundColor: "#ddedfd", borderColor: "#ddedfd" }}
            />
            <div className="mt-3">
              <label htmlFor="email" className="form-label mb-1">
                Email
              </label>
              <input
                type="email"
                className="form-control rounded-1"
                id="email"
                placeholder="Enter Email"
                autoComplete="off"
              />
            </div>

            <button className="w-100 mt-3 btn btn-primary py-2" type="button">
              Reset
            </button>

            <p className="mt-5 d-flex justify-content-center text-muted ">
              © 2022 Doot. Crafted by Lokendra Chaulagain all right reserved
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordComponent;
