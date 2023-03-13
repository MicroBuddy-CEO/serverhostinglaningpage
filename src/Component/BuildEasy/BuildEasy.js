import React from "react";

const BuildEasy = () => {
    return (
        <div className="h-[598px] flex px-[94px] bg-[#1053FF] mt-[90px] font-[inter]">
            <div className="w-[65%]">
                <h1 className="font-[700] font-[inter] text-[54px] text-white mt-[99px]">Building Website Is Easy
                </h1>

                <p className="font-[600] text-[20px] text-[#86BEFF] mt-[20px]">
                    Get Website Builder, Plugins, Themes, Icons and more.
                </p>

                <p className="font-[600] text-[20px] text-white mt-[102px]">
                    Create your website instantly, no coding/design skills required. Choose from over 100 themes <br />
                    or simply drag-and-drop to customize your design.
                </p>

                <div className="w-[154px] h-[41px] mt-[97px] font-[500] text-[14px] text-white bg-[#FF9649] rounded-[5px] text-center">
                    <button className="px-[20px] py-[11px]">
                        Get Started
                    </button>
                </div>

            </div>

            <div className="w-[35%] text-[40px] text-white grid content-center justify-center font-bold">LOGO</div>
        </div>
    );
};

export default BuildEasy;