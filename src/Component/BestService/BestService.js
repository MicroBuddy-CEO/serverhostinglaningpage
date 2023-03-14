import React from "react";
import "./BestService.css";
import icon1 from "../../Asstets/temp/diamond.svg";
import icon2 from "../../Asstets/temp/data management.svg";
import icon3 from "../../Asstets/temp/data recovery.svg";
import icon4 from "../../Asstets/temp/top notch security.svg";


const BestService = () => {

  return (
    <div className="font-[inter] px-[100px] mt-[90px]">

      <div>
        <div className="text-center mt-[60px] flex justify-center justify-items-center">
          <div className="w-[20px] bg-[#F11B1B] h-[1px] mt-3 mr-[10px]"></div>
          <p className="font-[500] text-[15px] text-[#1B84FF]">Services</p>
          <div className="w-[20px] bg-[#F11B1B] h-[1px] mt-3 ml-[10px]"></div>
        </div>

        <h1 className="text-center text-[35px] font-[500] mt-[12px]">
          Best Services You <span className="text-[#1B84FF]">Get</span>
        </h1>

        <p className="text-[16px] font-[500] text-[#8F8F8F] text-center mt-[12px]">
          Domain & Hosting Services
        </p>
      </div>

      <div className="mt-[70px] flex">

        <div className="border w-[412px] h-[382px] rounded-[20px] bg-[#FFFFFF] mr-[24px] shadow-lg">
          <div className="flex justify-center mt-[25px]">
            <div className="w-[80px] h-[80px] bg-[#FF9649] rounded-full flex justify-center items-center"> 
            <img src={icon1} alt="" />
            </div>
            
          </div>
          <h1 className="text-[30px] font-[500] mt-[20px] text-center ">
            Reliability
          </h1>
          <p className="text-[#8F8F8F] text-[16px] text-center font-[500] mt-[55px] px-[63px]">
            Sed ut perspiciatis unde omnis natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam nemo enim.
          </p>
        </div>

        <div className="border w-[412px] h-[382px] rounded-[20px] bg-[#FFFFFF] mr-[24px] shadow-lg">
        <div className="flex justify-center mt-[25px]">
            <div className="w-[80px] h-[80px] bg-[#1B84FF] rounded-full flex justify-center items-center"> 
            <img src={icon2} alt="" />
            </div>
          </div>
          <h1 className="text-[30px] font-[500] mt-[20px] text-center ">
            Data Management
          </h1>
          <p className="text-[#8F8F8F] text-[16px] text-center font-[500] mt-[55px] px-[63px]">
            Sed ut perspiciatis unde omnis natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam nemo enim.
          </p>
        </div>


        <div className="border w-[412px] h-[382px] rounded-[20px] bg-[#FFFFFF] mr-[24px] shadow-lg">
        <div className="flex justify-center mt-[25px]">
            <div className="w-[80px] h-[80px] bg-[#44D464] rounded-full flex justify-center items-center"> 
            <img src={icon3} alt="" />
            </div>
          </div>
          <h1 className="text-[30px] font-[500] mt-[20px] text-center ">
            Data Recovery
          </h1>
          <p className="text-[#8F8F8F] text-[16px] text-center font-[500] mt-[55px] px-[63px]">
            Sed ut perspiciatis unde omnis natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam nemo enim.
          </p>
        </div>

        <div className="border w-[412px] h-[382px] rounded-[20px] bg-[#FFFFFF] shadow-lg">

          <div className="flex justify-center mt-[25px]">
            <div className="w-[80px] h-[80px] bg-[#F25858] rounded-full flex justify-center items-center"> 
            <img src={icon4} alt="" />
            </div>
          </div>

          <h1 className="text-[30px] font-[500] mt-[20px] text-center ">
            Top Notch Securirty
          </h1>

          <p className="text-[#8F8F8F] text-[16px] text-center font-[500] mt-[55px] px-[63px]">
            Sed ut perspiciatis unde omnis natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam nemo enim.
          </p>

        </div>

      </div>

    </div>
  );
};

export default BestService;