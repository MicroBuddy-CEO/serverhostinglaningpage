import React from 'react';
import { IoCall } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import icon from "../../Asstets/icon.png";
import icon1 from "../../Asstets/temp/fb.svg";
import icon2 from "../../Asstets/temp/linkedin.svg";
import icon3 from "../../Asstets/temp/insta.svg";
import icon4 from "../../Asstets/temp/twitter.svg";
import "./Footer.css";


const Footer = () => {
    return (
        <div className='h-[920px] mt-[98px] bg-[#1457E6] font-[inter] text-[white] '>

            <div className='pt-[104px] grid grid-cols-4 justify-center px-[100px]'>

                <div>
                    <h2 className='font-[600] text-[30px]'>LOGO</h2>
                    <p className='text-[500] text-[16px] mt-[22px]'>At dolor clita amet erat takimata sed tempor <br /> invidunt lorem. Justo sea nonumy.</p>

                    <div className='flex items-center gap-[22px] mt-[42px] text-[22px] '>
                        <IoCall />
                        <p className='text-[14px] font-[500]' >+234 242 2442</p>
                    </div>

                    <div className='flex items-center gap-[22px] mt-[42px]  text-[22px]'>
                        <AiOutlineMail />
                        <p className='text-[14px] font-[500]' >User@gamil.com</p>
                    </div>

                    <div className='flex items-center gap-[22px] mt-[42px]  text-[24px]'>
                        <MdLocationOn />
                        <p className='text-[14px] font-[500]' >Location</p>
                    </div>

                    <div className='flex gap-[20px] mt-[40px]'>
                        <div className='w-[40px] h-[40px] rounded-full bg-[#80AEE4] flex items-center justify-center'>
                        <img src={icon1} alt="" />
                        </div>
                        <div className='w-[40px] h-[40px] rounded-full bg-[#80AEE4] flex items-center justify-center'>
                        <img src={icon2} alt="" />
                        </div>
                        <div className='w-[40px] h-[40px] rounded-full bg-[#80AEE4] flex items-center justify-center'>
                        <img src={icon3} alt="" />
                        </div>
                        <div className='w-[40px] h-[40px] rounded-full bg-[#80AEE4] flex items-center justify-center'>
                        <img src={icon4} alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='font-[600] text-[30px]'>Domains</h2>


                    <div className='flex items-center gap-[10px] mt-[22px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' >Register Domain Name</p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' >View Domain Pricing</p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' >Premium Domains</p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]'> Transfer Your Domain </p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]'> Bulk Domain Transfer </p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' > Free With Every Domain </p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' >Name Suggestion</p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' >Whois Lookup</p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' >View Promos</p>
                    </div>

                </div>


                <div>
                    <h2 className='font-[600] text-[30px]'>Hosting & Products</h2>


                    <div className='flex items-center gap-[10px] mt-[22px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' >Linux Hosting</p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' >Windows Hosting</p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' >WordPress Hosting</p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]'> Transfer Your Domain </p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]'> Bulk Domain Transfer </p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' > Free With Every Domain </p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' >Name Suggestion</p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' >Whois Lookup</p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' >View Promos</p>
                    </div>

                </div>


                <div>
                    <h2 className='font-[600] text-[30px]'>Get in Touch With Us</h2>



                    <div className="footerSearch w-[411pxpx] h-[40px] border border-[#8F8F8F] rounded-[80px] bg-white flex justify-end items-center mt-[20px]">

                        

                        <input className='w-[395px] h-[38px] rounded-[80px] pl-[10px] text-black' type="text" placeholder='search' />
                        <div className="w-[36px] h-[36px] flex justify-center items-center search-btn rounded-full m-[2px]">
                        <button className=" text-white text-[20px]"> <BsArrowRight/></button>
                        </div>
                        
                    </div>

                    <h2 className='font-[600] text-[30px] mt-[20px]'>Support</h2>



                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' >Premium Domains</p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]'> Transfer Your Domain </p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]'> Bulk Domain Transfer </p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' > Free With Every Domain </p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' >Name Suggestion</p>
                    </div>

                    <div className='flex items-center gap-[10px] mt-[20px] text-[22px] '>
                        <img src={icon} alt="" className='w-[20px] h-[20px]' />
                        <p className='text-[14px] font-[500]' >Whois Lookup</p>
                    </div>

                 

                </div>
            </div>

            <div className='mt-[206px]'>
                <hr />
                    <div className='flex justify-between mx-[100px] py-[40px]'>
                        <p className='text-[16px] font-[500]'>Payments We Accept</p>

                        <div className='flex gap-10'>
                        <p className='text-[16px] font-[500]'>Terms of Service</p>
                        |
                        <p className='text-[16px] font-[500]'>Privacy policy</p>
                        |
                        <p classNam e='text-[16px] font-[500]'>Legal</p>
                        </div>
                    </div>
                <hr />
            </div>
            <p className='text-[14px] font-[700] text-center py-[31px]'>Copyright @ 2023 Hostma. Designed with by Spruko All Rights Reserved</p>
        </div>
    );
};

export default Footer;