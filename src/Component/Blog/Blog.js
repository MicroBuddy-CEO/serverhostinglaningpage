import React from "react";
import img1 from "../../Asstets/temp/img1.png";
import img2 from "../../Asstets/temp/img2.png";
import img3 from "../../Asstets/temp/img3.png";
import img4 from "../../Asstets/temp/Megan Peters.png";
import img5 from "../../Asstets/temp/18.svg";



const Blog = () => {

    return (
        <div className="font-[inter] px-[100px] mt-[90px]">

            <div className="mt-[60px]">
                <div className="text-center  flex justify-center justify-items-center">
                    <div className="w-[20px] bg-[#F11B1B] h-[1px] mt-3 mr-[10px]"></div>
                    <p className="font-[500] text-[15px] text-[#1B84FF]">Our Blog</p>
                    <div className="w-[20px] bg-[#F11B1B] h-[1px] mt-3 ml-[10px]"></div>
                </div>

                <h1 className="text-center text-[35px] font-[500] mt-[12px]">
                    Our Latest <span className="text-[#1B84FF]">Blog</span>
                </h1>

                <p className="text-[16px] font-[500] text-[#8F8F8F] text-center mt-[12px]">
                    Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.
                </p>
            </div>



            <div className="mt-[70px] flex justify-center">

                <div className="border w-[505px] h-[704px] rounded-[10px] bg-[#FFFFFF] mr-[35px] shadow-lg">
                    <div className="h-[352px] rounded-tl-[10px] rounded-tr-[10px] z-[-50]">
                        <img src={img1} alt="" className="h-[352px]" />
                    </div>
                    <div className="pl-[45px] pr-[30px] relative">
                        <div className="w-[88px] h-[36px] bg-[#FF9649] rounded-[50px] grid content-center absolute top-[-60px]">
                            <button className="text-white text-[14px] font-[500]" >Hosting</button>
                        </div>
                        <h1 className="text-[26px] font-[500] text-black mt-[40px]">Starting a Web Hosting Business</h1>
                        <p className="text-[16px] font-[500] text-[#8F8F8F] mt-[30px]">To take a trivial example, which of us ever undertakes
                            laborious physical exerciser , except to obtain some
                            advantage from it...
                        </p>
                        <div className="mt-[61px] flex justify-between justify-items-center">
                            <div className="flex justify-items-center">
                                <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9]">
                                    <img src={img4} alt="" />
                                </div>
                                <div className="ml-[30px] font-[500]">
                                    <h3 className="text-[20px] ">Megan Peters</h3>
                                    <p className="text-[16px] text-[#8F8F8F]">1 day ago</p>
                                </div>
                            </div>
                            <div className="w-[30px] h-[30px] grid content-center justify-center rounded-full bg-[#D9D9D9]">
                                <img src={img5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>



                <div className="border w-[505px] h-[704px] rounded-[10px] bg-[#FFFFFF] mr-[35px] shadow-lg">

                    <div className="h-[352px] rounded-tl-[10px] rounded-tr-[10px]">
                        <img src={img2} alt="" className="h-[352px]" />
                    </div>

                    <div className="pl-[45px] pr-[30px] relative">
                        <div className="w-[88px] h-[36px] bg-[#86BEFF] rounded-[50px] grid content-center absolute top-[-60px]">
                            <button className="text-white text-[14px] font-[500]" >Email</button>
                        </div>

                        <h1 className="text-[26px] font-[500] text-black mt-[40px]">Email Hosting For Your Projects</h1>

                        <p className="text-[16px] font-[500] text-[#8F8F8F] mt-[30px]">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum   deleniti atquem
                        </p>

                        <div className="mt-[61px] flex justify-between justify-items-center">

                            <div className="flex justify-items-center">
                                <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9]">
                                    <img src={img4} alt="" />
                                </div>

                                <div className="ml-[30px] font-[500]">
                                    <h3 className="text-[20px] ">Megan Peters</h3>
                                    <p className="text-[16px] text-[#8F8F8F]">1 day ago</p>
                                </div>
                            </div>
                            <div className="w-[30px] h-[30px] grid content-center justify-center rounded-full bg-[#D9D9D9]">
                                <img src={img5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>



                <div className="border w-[505px] h-[704px] rounded-[10px] bg-[#FFFFFF] shadow-lg">

                    <div className="h-[352px] rounded-tl-[10px] rounded-tr-[10px]">
                        <img src={img3} alt="" className="h-[352px]" />
                    </div>

                    <div className="pl-[45px] pr-[30px] relative">
                        <div className="w-[88px] h-[36px] bg-[#44D464] rounded-[50px] grid content-center absolute top-[-60px]">
                            <button className="text-white text-[14px] font-[500]" >Cloud</button>
                        </div>

                        <h1 className="text-[26px] font-[500] text-black mt-[40px]">Cloud Hosting growing faster</h1>

                        <p className="text-[16px] font-[500] text-[#8F8F8F] mt-[30px]">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut „
                        </p>

                        <div className="mt-[61px] flex justify-between justify-items-center">

                            <div className="flex justify-items-center">
                                <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9]">
                                    <img src={img4} alt="" />
                                </div>

                                <div className="ml-[30px] font-[500]">
                                    <h3 className="text-[20px] ">Megan Peters</h3>
                                    <p className="text-[16px] text-[#8F8F8F]">1 day ago</p>
                                </div>
                            </div>

                            <div className="w-[30px] h-[30px] grid content-center justify-center rounded-full bg-[#D9D9D9]">
                                <img src={img5} alt="" />
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Blog;