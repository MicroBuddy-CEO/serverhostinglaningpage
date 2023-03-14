import React from 'react';
import "./Navbar.css";
import NavContact from '../NavContact/NavContact';
import NavLogo from '../NavLogo/NavLogo';

const Navbar = () => {
    return (
        <div>
            <NavContact />
            <NavLogo />


            <div className="h-[90px] bg-[#1B84FF] text-white grid  content-center justify-center w-full">
                <div className="flex justify-between items-center px-[100px] w-screen  font-[inter]">

                    <div className="flex justify-center justify-items-center text-[20px] font-[400]">
                        <ul className="flex snip1189">
                            <li className=''><a href="#!">Home</a></li>
                            <li><a href="#!">Domains</a></li>
                            <li><a href="#!">Websites</a></li>
                            <li><a href="#!">Hosting</a></li>
                            <li><a href="#!">Email & Productivity</a></li>
                            <li><a href="#!">Security</a></li>
                            <li><a href="#!">WHMCS</a></li>
                        </ul>
                    </div>

                    <div className="flex justify-center justify-items-center text-[14px] font-[500]">
                        <div className="mr-[10px] bg-[#FF9649] rounded-[5px] w-[82px] h-[38px] grid content-center justify-center">
                            <button>Register</button>
                        </div>

                        <div className="mr-[10px] border border-white rounded-[5px] w-[82px] h-[38px] grid content-center justify-center">
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;