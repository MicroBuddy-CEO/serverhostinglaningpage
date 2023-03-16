import React from "react";
import img1 from "../../Asstets/temp/abs3.png";

const TechSupport = () => {

    return (
        <div className="h-[598px]  flex px-[94px] bg-[#1053FF] mt-[90px] font-[inter] overflow">
            <div className="w-[65%]">
                <h1 className="font-[700] font-[inter] text-[54px] text-white mt-[99px]">Best Technical Support 24/7
                </h1>

                <p className="font-[600] text-[20px] text-[#86BEFF] mt-[20px]">
                    Support and Guidance
                </p>

                <p className="font-[600] text-[20px] text-[#86BEFF] mt-[46px]">
                    Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. <br /> Aliquyam sed
                    amet. Kasd diam rebum sit ipsum ipsum erat et <br /> kasd, sed et et erat elitr consetetur et aliquyam. Et lorem
                    ipsum Sit ipsum sanctus ea.
                </p>

                <p className="font-[600] text-[20px] text-white mt-[46px]">Call Us : 123-789-7854 (Or) Chat Now</p>

                <div className="getStartedBtn w-[154px] h-[41px] mt-[49px] font-[500] text-[14px] text-white bg-[#FF9649] rounded-[5px] text-center">
                    <button className="px-[20px] py-[11px]">
                        Contact Now
                    </button>
                </div>

            </div>

            <div className="  w-[35%] h-[750px]  text-[40px] text-white grid content-center justify-center font-bold">
                <img src={img1} alt="" id="zio" />
            </div>
        </div>
    );
};

export default TechSupport;