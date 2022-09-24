import React from "react";
import { useRouter } from "next/router";
import { FaUserAlt } from "react-icons/fa";

function Logout() {
  const router = useRouter();

  return (
    <div className="custom-bg-primary p-5 h100vh ">
      <div className="row ">
        <div className="col-3">
          <h5>Chat App</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, vel!</p>
        </div>
        <div className="col-9 custom-bg-card-white rounded-3 pt-5 px-5  d-flex justify-content-center" style={{ height: "90vh" }}>
          <form action="" className="col-5">
            <div className="d-flex flex-column gap-2 align-items-center justify-content-center">
              <div className="p-4 rounded-circle" style={{ backgroundColor: "#dceee2" }}>
                <FaUserAlt className="rounded-circular" color="4EAD6C" size={40} />
              </div>
              <h3>You are Logged Out</h3>
              <h6>Thank you for using Doot</h6>
            </div>

            <div className="row mt-3">
              <button className="btn btn-primary py-2" type="button" onClick={() => router.push("/login")}>
                Sign In
              </button>
            </div>

            <p className="mt-5 d-flex justify-content-center text-muted ">© 2022 Doot. Crafted by Lokendra Chaulagain all right reserved</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Logout;
