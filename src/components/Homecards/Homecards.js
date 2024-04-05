export default function Homecards(){
    return (
        <div className=" flex flex-col items-center mt-32 mx-[6.25rem]">
            <div className="flex flex-col items-center space-y-4 w-[80%]">
                <p className="font-outfit text-[45px] text-gray-800 font-bold text-center">Our Featured Buddies<span className="font-light"> can provide you with an efficient and convenient solution</span></p>
                <p className="font-mons text-[16px] text-center">These hardworking individuals have made valuable contributions to the platform, providing quality services and consistently delivering exceptional results for their clients.</p>
            </div>
            <div className="flex justify-between mt-20 w-full">
                {/* 1 */}
                <div className=" w-[350px] h-[550px]">
                    <div className="border-[24px] border-b-0 rounded-[40px]  rounded-b-none">
                        <div className="flex flex-col pt-6 space-y-2 items-center">
                            <img className="w-[100px] h-[100px] border-[7px] rounded-full" src="../img/Homeprofileimg1.png" alt="ProfileImg"/>
                            <p className="font-outfit text-[18px] font-semibold">Zarie Westervelt</p>
                            <p className="font-Inter font-medium text-[12px] text-slate-500">928 Completed tasks</p>
                        </div>
                        <hr className="border-1 border-gray-300 mt-10 mx-8"/>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[14px]">Appliance Repair</p>
                            <p className="font-outfit font-semibold text-[14px]">$20/hr</p>
                        </div>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[14px]">Plumbing Repair</p>
                            <p className="font-outfit font-semibold text-[14px]">$24/hr</p>
                        </div>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[14px]">Electronics Repair</p>
                            <p className="font-outfit font-semibold text-[14px]">$23/hr</p>
                        </div>
                    </div>
                    <div className="mt-8 ">
                        <p className="font-outfit text-center text-[18px] font-semibold">I'm Right person for the job </p>
                        <p className="font-Inter font-medium text-center text-[14px]">I have all the neccessary supplies and resources to make your transition simple, stree-free, and successful</p>
                    </div>
                </div>
                {/* 2 */}
                <div className=" w-[350px] h-[550px]">
                    <div className="border-[24px] border-b-0 rounded-[40px] border-teal-100 rounded-b-none">
                        <div className="flex flex-col pt-6 space-y-2 items-center">
                            <img className="w-[100px] h-[100px] border-[7px] rounded-full" src="../img/Homeprofileimg2.png" alt="ProfileImg"/>
                            <p className="font-outfit text-[18px] font-semibold">Zarie Westervelt</p>
                            <p className="font-Inter font-medium text-[12px] text-slate-500">928 Completed tasks</p>
                        </div>
                        <hr className="border-1 border-gray-300 mt-10 mx-8"/>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[14px]">Appliance Repair</p>
                            <p className="font-outfit font-semibold text-[14px]">$20/hr</p>
                        </div>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[14px]">Plumbing Repair</p>
                            <p className="font-outfit font-semibold text-[14px]">$24/hr</p>
                        </div>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[14px]">Electronics Repair</p>
                            <p className="font-outfit font-semibold text-[14px]">$23/hr</p>
                        </div>
                    </div>
                    <div className="mt-8 ">
                        <p className="font-outfit text-center text-[18px] font-semibold">I'm Right person for the job </p>
                        <p className="font-Inter font-medium text-center text-[14px]">I have all the neccessary supplies and resources to make your transition simple, stree-free, and successful</p>
                    </div>
                </div>
                {/* 3 */}
                <div className=" w-[350px] h-[550px]">
                    <div className="border-[24px] border-b-0 rounded-[40px] border-rose-100 rounded-b-none">
                        <div className="flex flex-col pt-6 space-y-2 items-center">
                            <img className="w-[100px] h-[100px] border-[7px] rounded-full" src="../img/Homeprofileimg3.png" alt="ProfileImg"/>
                            <p className="font-outfit text-[18px] font-semibold">Zarie Westervelt</p>
                            <p className="font-Inter font-medium text-[12px] text-slate-500">928 Completed tasks</p>
                        </div>
                        <hr className="border-1 border-gray-300 mt-10 mx-8"/>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[14px]">Appliance Repair</p>
                            <p className="font-outfit font-semibold text-[14px]">$20/hr</p>
                        </div>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[14px]">Plumbing Repair</p>
                            <p className="font-outfit font-semibold text-[14px]">$24/hr</p>
                        </div>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[14px]">Electronics Repair</p>
                            <p className="font-outfit font-semibold text-[14px]">$23/hr</p>
                        </div>
                    </div>
                    <div className="mt-8 ">
                        <p className="font-outfit text-center text-[18px] font-semibold">I'm Right person for the job </p>
                        <p className="font-Inter font-medium text-center text-[14px]">I have all the neccessary supplies and resources to make your transition simple, stree-free, and successful</p>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <a href="#Home"><p className="font-outfit text-[16px] font-bold text-[#4335c1] hover:text-[#7E30E1] cursor-pointer w-max">See more Buddies</p></a>
            </div>
        </div>
    );
}