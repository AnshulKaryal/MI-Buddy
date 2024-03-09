import { FaTwitter } from "react-icons/fa";

export default function HomeCustomerReview(){
    return (
        <div className=" flex flex-col items-center bg-[#F3F8FF] mt-20 pb-[6.25rem] px-[6.25rem]">
            <div className="flex flex-col items-center mt-20 space-y-4 w-[65%]">
                <p className="font-outfit text-5xl text-gray-800 font-light text-center">Our Customer are living life with a <span className="font-bold"> smile on their faces!</span></p>
            </div>
            <div className="flex justify-between w-full  mt-20">
                {/* 1 */}
                <div className="bg-white rounded-xl w-[250px] px-6 py-6 ">
                    <div className="flex justify-between items-center ">
                        <div className="flex items-center space-x-3">
                            <img className="w-[40px] h-[40px] rounded-full" src="../img/twitterimg1.png"/>
                            <div>
                                <p className="font-outfit font-semibold text-[16px]">Kadin Torff</p>
                                <p className="font-Inter text-slate-500 text-[12px]">@darrels</p>
                            </div>
                        </div>
                        <FaTwitter className="text-cyan-400 w-6 h-6" />
                    </div>
                    <div className="mt-4">
                        <p className="font-Inter font-medium text-[14px] text-slate-800">"Wilson was fantastic! Easy to work with, efficient, and went above and beyond when the task ended up being much larger/longer then we ant..."</p>
                        <p className="font-outfit font-semibold text-[#4335c1] pt-3 text-[14px]">Delivery</p>
                    </div>
                </div>
                {/* 2 */}
                <div className="bg-white rounded-xl w-[250px] px-6 py-6 ">
                    <div className="flex justify-between items-center ">
                        <div className="flex items-center space-x-3">
                            <img className="w-[40px] h-[40px] rounded-full" src="../img/twitterimg2.png"/>
                            <div>
                                <p className="font-outfit font-semibold text-[16px]">Kadin Torff</p>
                                <p className="font-Inter text-slate-500 text-[12px]">@darrels</p>
                            </div>
                        </div>
                        <FaTwitter className="text-cyan-400 w-6 h-6" />
                    </div>
                    <div className="mt-4">
                        <p className="font-Inter font-medium text-[14px] text-slate-800">"Wilson was fantastic! Easy to work with, efficient, and went above and beyond when the task ended up being much larger/longer then we ant..."</p>
                        <p className="font-outfit font-semibold text-[#4335c1] pt-3 text-[14px]">Delivery</p>
                    </div>
                </div>
                {/* 3 */}
                <div className="bg-white rounded-xl w-[250px] px-6 py-6 ">
                    <div className="flex justify-between items-center ">
                        <div className="flex items-center space-x-3">
                            <img className="w-[40px] h-[40px] rounded-full" src="../img/twitterimg3.png"/>
                            <div>
                                <p className="font-outfit font-semibold text-[16px]">Kadin Torff</p>
                                <p className="font-Inter text-slate-500 text-[12px]">@darrels</p>
                            </div>
                        </div>
                        <FaTwitter className="text-cyan-400 w-6 h-6" />
                    </div>
                    <div className="mt-4">
                        <p className="font-Inter font-medium text-[14px] text-slate-800">"Wilson was fantastic! Easy to work with, efficient, and went above and beyond when the task ended up being much larger/longer then we ant..."</p>
                        <p className="font-outfit font-semibold text-[#4335c1] pt-3 text-[14px]">Delivery</p>
                    </div>
                </div>
                {/* 4 */}
                <div className="bg-white rounded-xl w-[250px] px-6 py-6 ">
                    <div className="flex justify-between items-center ">
                        <div className="flex items-center space-x-3">
                            <img className="w-[40px] h-[40px] rounded-full" src="../img/twitterimg4.png"/>
                            <div>
                                <p className="font-outfit font-semibold text-[16px]">Kadin Torff</p>
                                <p className="font-Inter text-slate-500 text-[12px]">@darrels</p>
                            </div>
                        </div>
                        <FaTwitter className="text-cyan-400 w-6 h-6" />
                    </div>
                    <div className="mt-4">
                        <p className="font-Inter font-medium text-[14px] text-slate-800">"Wilson was fantastic! Easy to work with, efficient, and went above and beyond when the task ended up being much larger/longer then we ant..."</p>
                        <p className="font-outfit font-semibold text-[#4335c1] pt-3 text-[14px]">Delivery</p>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <p className="font-outfit text-[16px] font-bold text-[#4335c1] hover:text-[#7E30E1] cursor-pointer w-max">Check All 2,123 reviews</p>
            </div>
        </div>
    );
}