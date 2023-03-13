import React from 'react';
import "./AboutUs.css";
import { BsCircleFill } from 'react-icons/bs';


const AboutUs = () => {
    return (
        <div className="font-[inter] px-[60px] mt-[90px]">

            <div className="">
                <div className="text-center  flex justify-center justify-items-center">
                    <div className="w-[20px] bg-[#F11B1B] h-[1px] mt-3 mr-[10px]"></div>
                    <p className="font-[500] text-[15px] text-[#1B84FF]">Reviews</p>
                    <div className="w-[20px] bg-[#F11B1B] h-[1px] mt-3 ml-[10px]"></div>
                </div>

                <h1 className="text-center text-[35px] font-[500] mt-[12px]">
                    What Do People Say <span className="text-[#1B84FF]">About Us</span>
                </h1>

                <p className="text-[16px] font-[500] text-[#8F8F8F] text-center mt-[12px]">
                    Client Reviews
                </p>
            </div>

            <div className='flex justify-between mt-[67px]'>
                <div className='flex items-center'>
                    <div className='w-[206px] h-[206px] rounded-full bg-[#D9D9D9] review-circle'></div>
                    <div className='ml-[-150px] mt-[50px]'>
                        <p className='text-[26px] font-[500]'>Client Say About Us</p>
                        <div className='flex'>
                            <BsCircleFill className='w-[5px] h-[5px] text-[#1053FF] mr-[5px]' />
                            <BsCircleFill className='w-[5px] h-[5px] text-[#8F8F8F] mr-[5px]' />
                            <BsCircleFill className='w-[5px] h-[5px] text-[#8F8F8F] mr-[5px]' />
                            <BsCircleFill className='w-[5px] h-[5px] text-[#8F8F8F] mr-[5px]' />
                            <BsCircleFill className='w-[5px] h-[5px] text-[#8F8F8F] mr-[5px]' />
                            <BsCircleFill className='w-[5px] h-[5px] text-[#8F8F8F]' />
                        </div>
                    </div>
                </div>


                <div className='w-[1202px] h-[357px] bg-[#D9EAFF] rounded-[10px] flex items-center '>
                    <div className=' flex items-center  ml-[-45px]'>
                        <div className='w-[584px] h-[229px] bg-[#1B84FF] rounded-[10px] px-[26px] py-[35px] mr-[20px]'>

                            <div className='flex items-center gap-[20px]'>
                                <div className='w-[70px] h-[70px] rounded-full bg-[#D9D9D9]'></div>
                                <div className='text-white font-[500]'>
                                    <h3 className=' text-[20px] '>Megan Peters</h3>
                                    <p className='text-[16px]'>12 Aug 2022</p>
                                </div>
                            </div>

                            <p className='text-[16px] font-[500] text-white mt-[12px]'>Efficiently innovate customized growth strategies whereas error-free paradigms. Monotonectally enhance stand-alone data with prospective innovation.</p>
                        </div>

                        <div className='w-[584px] h-[229px] bg-[#1B84FF] rounded-[10px] px-[26px] py-[35px]'>

                            <div className='flex items-center gap-[20px]'>
                                <div className='w-[70px] h-[70px] rounded-full bg-[#D9D9D9]'></div>
                                <div className='text-white font-[500]'>
                                    <h3 className=' text-[20px] '>Megan Peters</h3>
                                    <p className='text-[16px]'>12 Aug 2022</p>
                                </div>
                            </div>

                            <p className='text-[16px] font-[500] text-white mt-[12px]'>Efficiently innovate customized growth strategies whereas error-free paradigms. Monotonectally enhance stand-alone data with prospective innovation.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutUs;