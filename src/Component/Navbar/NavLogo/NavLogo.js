import React from "react";
import "./NavLogo.css";
import { BsFillTelephoneFill, BsChat } from 'react-icons/bs';


const NavLogo = () => {

  return (
    <div className="nav-logo-container">
      <div className="sub-logo-container">
        <div className="main-logo-cont">
          <p>Logo</p>
        </div>

        <div className="flex justify-center justify-items-center">
          <div className="flex items-center">
            <div className="w-[50px] h-[50px] border bg-[#80AEE4] grid content-center justify-center rounded-full mr-[10px]"> <BsFillTelephoneFill />
            </div>
            <p className="mr-[129px] text-center">
              Contact Us <br />
              <span className="text-[14px]">+93420498</span>
            </p>
          </div>

          <div className="flex items-center">
            <div className="w-[50px] h-[50px] border bg-[#80AEE4] grid content-center justify-center rounded-full mr-[10px]"> <BsChat />
            </div>
            <p className="text-center">
              Live Chat <br />
              <span className="text-[14px]">+93420498</span>
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default NavLogo;