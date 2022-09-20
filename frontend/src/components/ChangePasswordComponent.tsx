import React from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import profile from "../../public/profile.jpg";

function ChangePasswordComponent() {
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
              <h3 className="mb-5">Change Password</h3>
              <Image
                src={profile}
                className="rounded-circle "
                height={100}
                width={100}
                alt="img"
              />
              <h6>Lokendra Chaulagain</h6>
            </div>
            <div className="mt-3">
              <label htmlFor="oldPassword" className="form-label mb-1">
                Old Password
              </label>
              <input
                type="password"
                className="form-control rounded-1 "
                id="oldPassword"
                placeholder="Enter Old Password"
                autoComplete="off"
              />
            </div>

            <div className="mt-3">
              <label htmlFor="newPassword" className="form-label mb-1">
                New Password
              </label>
              <input
                type="password"
                className="form-control rounded-1 "
                id="newPassword"
                placeholder="Enter New Password"
                autoComplete="off"
              />
            </div>

            <div className="mt-3">
              <label htmlFor="confirmPassword" className="form-label mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                className="form-control rounded-1 "
                id="confirmPassword"
                placeholder="Enter Confirm Password"
              />
            </div>

            <div className="row d-flex  mt-4">
              <div className="col-6 ">
                <button
                  className="col-6 w-100 btn btn-primary py-2"
                  type="button"
                >
                  Save
                </button>
              </div>

              <div className="col-6">
                <button
                  className="col-6 w-100 btn btn-primary py-2"
                  type="button"
                  onClick={() => router.push("/login")}
                >
                  Cancel
                </button>
              </div>
            </div>

            <p className="mt-5 d-flex justify-content-center text-muted ">
              © 2022 Doot. Crafted by Lokendra Chaulagain all right reserved
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordComponent;
