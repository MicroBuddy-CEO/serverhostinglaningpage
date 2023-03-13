import React from 'react';

const Statistics = () => {


    return (
        <div className='px-[100px] bg-[#1053FF] h-[598px] mt-[90px] font-[inter]'>

            <div className='pt-[73px] text-center'>
                <h1 className='text-[54px]  text-white font-[700]'>Why Choose Us?</h1>
                <p className='text-[20px] font-[600] text-[#86BEFF] mt-[20px]'>Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.</p>
            </div>

            <div className='mt-[90px] grid grid-cols-4'>

                <div className="border w-[406px] h-[265px] rounded-[20px] bg-[#FFFFFF] mr-[33px] text-center shadow-lg">
                    <div className="flex justify-center mt-[30px]">
                        <div className="w-[60px] h-[60px] bg-[#1B84FF] rounded-full"></div>
                    </div>
                    <h1 className="text-[26px] font-[500] mt-[30px]  ">
                        Domain Registered
                    </h1>
                    <p className='font-[500] text-[36px] text-[#1B84FF] mt-[30px]'>36</p>
                </div>

                <div className="border w-[406px] h-[265px] rounded-[20px] bg-[#FFFFFF] mr-[33px] text-center shadow-lg">
                    <div className="flex justify-center mt-[30px]">
                        <div className="w-[60px] h-[60px] bg-[#FF9649] rounded-full"></div>
                    </div>
                    <h1 className="text-[26px] font-[500] mt-[30px]  ">
                    Resellers
                    </h1>
                    <p className='font-[500] text-[36px] text-[#FF9649] mt-[30px]'>25</p>
                </div>

                <div className="border w-[406px] h-[265px] rounded-[20px] bg-[#FFFFFF] mr-[33px] text-center shadow-lg">
                    <div className="flex justify-center mt-[30px]">
                        <div className="w-[60px] h-[60px] bg-[#44D464] rounded-full"></div>
                    </div>
                    <h1 className="text-[26px] font-[500] mt-[30px]  ">
                    Total Clients
                    </h1>
                    <p className='font-[500] text-[36px] text-[#44D464] mt-[30px]'>500</p>
                </div>

                <div className="border w-[406px] h-[265px] rounded-[20px] bg-[#FFFFFF] mr-[33px] text-center shadow-lg">
                    <div className="flex justify-center mt-[30px]">
                        <div className="w-[60px] h-[60px] bg-[#F25858] rounded-full"></div>
                    </div>
                    <h1 className="text-[26px] font-[500] mt-[30px]  ">
                    Happy Customers
                    </h1>
                    <p className='font-[500] text-[36px] text-[#F25858] mt-[30px]'>200</p>
                </div>


            </div>

        </div>
    );
};

export default Statistics;