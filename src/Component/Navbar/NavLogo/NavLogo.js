import React from "react";
import "./NavLogo.css";

const NavLogo = () => {

  return (
    <div className=" bg-[#1053FF] h-[119px] text-white grid  w-full content-center justify-center">
      <div className="flex justify-between px-[100px] w-screen  text-[20px] font-[500] font-[inter]">
        <div className="flex justify-center justify-items-center">
          <p className="text-2xl font-bold">Logo</p>
        </div>

        <div className="flex justify-center justify-items-center">
          <p className="mr-[129px] text-center">
            Contact Us <br />
            <span className="text-[14px]">+93420498</span>
          </p>
          <p className="text-center">
            Live Chats <br />
            <span className="text-[14px]">+93420498</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavLogo;