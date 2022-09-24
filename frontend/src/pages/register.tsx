import React from "react";
import { FiGithub } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineGoogle } from "react-icons/ai";
import { useRouter } from "next/router";

function Register() {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/chats");
  };

  return (
    <div className="custom-bg-primary p-5 h100vh ">
      <div className="row ">
        <div className="col-3">
          <h5>Chat App</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, vel!</p>
        </div>
        <div className="col-9 custom-bg-card-white rounded-3 pt-5 px-5  d-flex justify-content-center" style={{ height: "90vh" }}>
          <form action="" className="col-5">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3>Register Account</h3>
              <p>Get your free Doot account now.</p>
            </div>
            <div className="mt-3">
              <label htmlFor="email" className="form-label mb-1">
                Email
              </label>
              <input type="email" className="form-control rounded-1 " id="email" placeholder="Enter Email" autoComplete="off" />
            </div>

            <div className="mt-3">
              <label htmlFor="username" className="form-label mb-1">
                Username
              </label>
              <input type="text" className="form-control rounded-1 " id="username" placeholder="Enter Username" autoComplete="off" />
            </div>

            <div className="mt-3">
              <label htmlFor="password" className="form-label mb-1">
                Password
              </label>
              <input type="password" className="form-control rounded-1 " id="password" placeholder="Enter Password" />
            </div>

            <div className="mt-3">
              <label htmlFor="confirmPassword" className="form-label mb-1">
                Confirm Password
              </label>
              <input type="password" className="form-control rounded-1 " id="confirmPassword" placeholder="Retype Password" />
            </div>

            <div className="mt-4 ">
              <button type="button" className="w-100 btn btn-primary" onClick={handleRegister}>
                Register
              </button>
            </div>

            <div className="row align-items-center mt-3">
              <div className="col">
                <hr />
              </div>
              <div className="col d-flex justify-content-center px-0">
                <h6>Sign up using</h6>
              </div>

              <div className="col">
                <hr />
              </div>
            </div>

            <div className="row mt-3 ">
              <div className="col gap-5 d-flex justify-content-center">
                <AiOutlineGoogle size={22} cursor="pointer" color="#DB4437" />
                <FiGithub size={22} cursor="pointer" color="#171515" />
                <GrFacebookOption size={22} cursor="pointer" color="#3B5998" />
              </div>
            </div>

            <p className="mt-3 d-flex justify-content-center ">
              Already have an account ?
              <span className="custom-primary-color cp fw-semibold" onClick={() => router.push("/login")}>
                Login
              </span>
            </p>

            <p className="mt-5 d-flex justify-content-center text-muted ">© 2022 Doot. Crafted by Lokendra Chaulagain all right reserved</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
