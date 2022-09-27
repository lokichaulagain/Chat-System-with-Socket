import React, { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillEye, AiFillEyeInvisible, AiOutlineGoogle } from "react-icons/ai";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (e: any) => {
    setPasswordInput(e.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const [userName, setUserName] = useState("");
  useEffect(() => {}, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    router.push("/");
  };

  return (
    <div className="custom-bg-primary p-5 h100vh ">
      <div className="row ">
        <div className="col-3">
          <h5>Chat App</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, vel!</p>
        </div>
        <div className="col-9 custom-bg-card-white rounded-3 pt-5 px-5  d-flex justify-content-center" style={{ height: "90vh" }}>
          <form action="" className="col-5" onSubmit={handleSubmit}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3>Welcome Back !</h3>
              <p>Sign in to continue to Doot.</p>
            </div>
            <div className="mt-3">
              <label htmlFor="email" className="form-label mb-1">
                Email
              </label>
              <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="form-control rounded-1 " id="email" placeholder="Enter Email" autoComplete="off" />
            </div>

            <div className="mt-3">
              <label htmlFor="password" className="form-label mb-1 d-flex align-items-center justify-content-between">
                Password
                <span className="cp text-muted">Forgot password ?</span>
              </label>
              <div className="input-group">
                <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className="form-control rounded-1 " id="password" placeholder="Enter Password" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                  {passwordType === "password" ? <AiFillEye onClick={togglePassword} /> : <AiFillEyeInvisible onClick={togglePassword} />}
                </button>
              </div>
            </div>

            <div className="form-check mt-3 gap-2 d-inline-flex">
              <input className="form-check-input cp" type="checkbox" value="" id="checkBox" />
              <label className="form-check-label cp" htmlFor="checkBox">
                Remember me
              </label>
            </div>

            <div className="mt-4 ">
              <button type="submit" className="w-100 btn btn-primary">
                Login
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
              Dont have an account ?
              <span className="custom-primary-color cp fw-semibold" onClick={() => router.push("/register")}>
                Register
              </span>
            </p>

            <p className="mt-5 d-flex justify-content-center text-muted ">© 2022 Doot. Crafted by Lokendra Chaulagain all right reserved</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
