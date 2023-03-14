import React from "react";
import "./NavLogo.css";
import { BsFillTelephoneFill, BsChat } from 'react-icons/bs';


const NavLogo = () => {

  return (
    <div className=" bg-[#1053FF] h-[119px] text-white grid  w-full content-center justify-center">
      <div className="flex justify-between px-[100px] w-screen  text-[20px] font-[500] font-[inter]">
        <div className="flex justify-center justify-items-center">
          <p className="text-2xl font-bold">Logo</p>
        </div>

        <div className="flex justify-center justify-items-center">
          <div className="flex items-center">
            <div className="w-[50px] h-[50px] border bg-[#80AEE4] grid content-center justify-center rounded-full mr-[10px]"> <BsFillTelephoneFill/>
            </div>
          <p className="mr-[129px] text-center">
            Contact Us <br />
            <span className="text-[14px]">+93420498</span>
          </p>
          </div>

          <div className="flex items-center">
            <div className="w-[50px] h-[50px] border bg-[#80AEE4] grid content-center justify-center rounded-full mr-[10px]"> <BsChat/> 
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