import React from "react";
import "./DomainPrice.css";

const DomainPrice = () => {
    return (
        <div className="font-[inter] px-[100px] mt-[90px]">
            <div>

                <h1 className="text-center text-[35px] font-[500]">
                    Looking for a  <span className="text-[#1B84FF]">Domain</span>
                </h1>

                <p className="text-[16px] font-[500] text-[#8F8F8F] text-center mt-[12px]">
                    Invidunt erat elitr ut accusam amet ipsum lorem </p>
            </div>

            <div className="flex justify-center mt-[104px]">
                <div className="grid content-center w-[1378px] h-[80px] border border-[#8F8F8F] rounded-[10px] bg-white">
                    <div className=" flex justify-between">
                        <p className="my-[22px] ml-[30px] text-[#8F8F8F]">Find your ideal domain name...</p>
                        <div className="w-[142px] h-[70px] grid content-center search-btn rounded-[10px] mr-[5px]">
                            <button className="text-[18px] font-[600] text-white ">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[50px] flex justify-center">

                <div className="border  w-[199px] h-[170px] rounded-[10px] bg-dotcom mr-[37px] text-center shadow-lg">
                    <h1 className="text-[22px] font-[500] mt-[35px] text-white  ">.com</h1>
                    <p className="text-[14px] font-[400] mt-[15px] text-[#A5CEFE]">Starts at</p>
                    <p className="text-[22px] font-[500] mt-[15px] text-white ">$ 1,100</p>
                </div>

                <div className="border  w-[199px] h-[170px] rounded-[10px] bg-[#FFFFFF] mr-[37px] text-center shadow-lg">
                    <h1 className="text-[22px] font-[500] mt-[35px] text-[#1B84FF]  ">.biz</h1>
                    <p className="text-[#8F8F8F] text-[14px] font-[400] mt-[15px]">Starts at</p>
                    <p className="text-[22px] font-[500] mt-[15px]">$ 1,100</p>
                </div>


                <div className="border  w-[199px] h-[170px] rounded-[10px] bg-[#FFFFFF] mr-[37px] text-center shadow-lg relative overflow-hidden">

                    <div className="price-tag w-[86px] h-[18px] bg-[#FB8585] absolute top-[14px] left-[-18px]">
                        <p className="text-[12px] text-white">New</p>
                    </div>

                    <h1 className="text-[22px] font-[500] mt-[35px] text-[#44D464] ">.net</h1>
                    <p className="text-[#8F8F8F] text-[14px] font-[400] mt-[15px]">Starts at</p>
                    <p className="text-[22px] font-[500] mt-[15px]">$ 1,000</p>
                </div>

                <div className="border  w-[199px] h-[170px] rounded-[10px] bg-[#FFFFFF] mr-[37px] text-center shadow-lg">
                    <h1 className="text-[22px] font-[500] mt-[35px] text-[#FF9649]  ">.in</h1>
                    <p className="text-[#8F8F8F] text-[14px] font-[400] mt-[15px]">Starts at</p>
                    <p className="text-[22px] font-[500] mt-[15px]">$ 1,400</p>
                </div>

                <div className="border  w-[199px] h-[170px] rounded-[10px] bg-[#FFFFFF] mr-[37px] text-center shadow-lg relative overflow-hidden">

                    <div className="price-tag w-[86px] h-[18px] bg-[#FB8585] absolute top-[14px] left-[-18px]">
                        <p className="text-[12px] text-white">New</p>
                    </div>

                    <h1 className="text-[22px] font-[500] mt-[35px]  text-[#1B84FF] ">.org</h1>
                    <p className="text-[#8F8F8F] text-[14px] font-[400] mt-[15px]">Starts at</p>
                    <p className="text-[22px] font-[500] mt-[15px]">$ 1,500</p>
                </div>

                <div className="border  w-[199px] h-[170px] rounded-[10px] bg-[#FFFFFF] text-center shadow-lg">
                    <h1 className="text-[22px] font-[500] mt-[35px] text-[#F25858]">.online</h1>
                    <p className="text-[#8F8F8F] text-[14px] font-[400] mt-[15px]">Starts at</p>
                    <p className="text-[22px] font-[500] mt-[15px]">$ 1,100</p>
                </div>

            </div>

        </div>
    );
};

export default DomainPrice;