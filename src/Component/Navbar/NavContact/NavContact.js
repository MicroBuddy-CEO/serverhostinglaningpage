import React from "react";

const NavContact = () => {
  return (
    <div className="h-[90px] bg-[#1B84FF] text-white grid  content-center justify-center w-full">
      <div className="flex justify-between px-[100px] w-screen  text-[20px] font-[500] font-[inter]">
        <div className="flex justify-center justify-items-center">
          <p className="mr-[70px]">24*7 Technical Support</p>
          <p>Jhon@gmail.com</p>
        </div>

        <div className="flex justify-center justify-items-center">
          <p className="mr-[142px]">Help</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default NavContact;