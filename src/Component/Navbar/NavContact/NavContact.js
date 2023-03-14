import React from "react";
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';


const NavContact = () => {
  return (
    <div className="h-[90px] bg-[#1B84FF] text-white grid  content-center justify-center w-full">
      <div className="flex justify-between px-[100px] w-screen  text-[20px] font-[500] font-[inter]">
        <div className="flex justify-center justify-items-center">
          <p className="mr-[70px]">24*7 Technical Support</p>
          <p>Jhon@gmail.com</p>
        </div>

        <div className="flex justify-center justify-items-center">
          <p className="mr-[142px] flex items-center"> <AiOutlineQuestionCircle className="mr-[10px]"/> Help</p>
          <p className="flex items-center"> <BiUser className="mr-[10px]"/> Contact</p>
        </div>
      </div>
    </div>
  );
};

export default NavContact;