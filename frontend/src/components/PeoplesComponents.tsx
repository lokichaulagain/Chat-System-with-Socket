import Image from "next/image";
import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import profile from "../../public/profile.jpg"

const PeoplesComponent = () => {
  return (
    <div>
      <div className="d-flex  my-2 align-items-center justify-content-between  ">
        <h5 className="">Peoples</h5>
        <FiMoreVertical className="cp" />
        </div>

       
        <input type="text" className="form-control" id="searchInput" placeholder="Search user..." />


        <h6 className="mt-5 ">Favorites</h6>
        <div className="row cp mt-3">
            <div className="col-3  d-flex">
              <Image src={profile} width={30} height={30}  className="rounded-circle" alt="" />
              <div className="rounded-circle" style={{width:"10px",height:"10px",backgroundColor:"green"}} ></div>
            </div>
          <div className="col">Lokendra Chaulagain</div>
        </div>

        <div className="row cp mt-3">
            <div className="col-3  d-flex">
              <Image src={profile} width={30} height={30}  className="rounded-circle" alt="" />
              <div className="rounded-circle" style={{width:"10px",height:"10px",backgroundColor:"green"}} ></div>
            </div>
          <div className="col">Lokendra Chaulagain</div>
        </div>


        <div className="row cp mt-3">
            <div className="col-3  d-flex">
              <Image src={profile} width={30} height={30}  className="rounded-circle" alt="" />
              <div className="rounded-circle" style={{width:"10px",height:"10px",backgroundColor:"green"}} ></div>
            </div>
          <div className="col">Lokendra Chaulagain</div>
        </div>
       





        <h6 className="mt-5">All Users</h6>
        <div className="row cp mt-3">
            <div className="col-3  d-flex">
              <Image src={profile} width={30} height={30}  className="rounded-circle" alt="" />
              <div className="rounded-circle" style={{width:"10px",height:"10px",backgroundColor:"green"}} ></div>
            </div>
          <div className="col">Lokendra Chaulagain</div>
        </div>

        <div className="row cp mt-3">
            <div className="col-3  d-flex">
              <Image src={profile} width={30} height={30}  className="rounded-circle" alt="" />
              <div className="rounded-circle" style={{width:"10px",height:"10px",backgroundColor:"green"}} ></div>
            </div>
          <div className="col">Lokendra Chaulagain</div>
        </div>


        <div className="row cp mt-3">
            <div className="col-3  d-flex">
              <Image src={profile} width={30} height={30}  className="rounded-circle" alt="" />
              <div className="rounded-circle" style={{width:"10px",height:"10px",backgroundColor:"green"}} ></div>
            </div>
          <div className="col">Lokendra Chaulagain</div>
        </div>
       





      


        <div className="d-flex mt-5 align-items-center justify-content-between  ">
        <h6 className="">Channels</h6>
        <FiMoreVertical className="cp" />
        </div>

        <div className="row d-flex mt-2">
            <div className="col cp"># <span>Web Design</span></div>
            <h6 className="col cp text-end">37</h6>
        </div>

        <div className="row d-flex mt-2">
            <div className="col cp"># <span>Web Design</span></div>
            <h6 className="col cp text-end">37</h6>
        </div>


        <div className="row d-flex mt-2">
            <div className="col cp"># <span>Web Design</span></div>
            <h6 className="col cp text-end">37</h6>
        </div>
       





      
    </div>
  );
};

export default PeoplesComponent;
