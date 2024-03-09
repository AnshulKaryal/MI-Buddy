export default function Homecards(){
    return (
        <div className=" flex flex-col items-center mt-32 mx-[6.25rem]">
            <div className="flex flex-col items-center space-y-4 w-[80%]">
                <p className="font-outfit text-6xl text-gray-800 font-bold text-center">Our Featured Buddies<span className="font-light"> can provide you with an efficient and convenient solution</span></p>
                <p className="font-mons text-[20px] text-center">These hardworking individuals have made valuable contributions to the platform, providing quality services and consistently delivering exceptional results for their clients.</p>
            </div>
            <div className="flex justify-between mt-20 w-full">
                {/* 1 */}
                <div className=" w-[400px] h-[600px]">
                    <div className="border-[30px] border-b-0 rounded-[45px] rounded-b-none">
                        <div className="flex flex-col pt-6 space-y-2 items-center">
                            <img className="w-[120px] h-[120px] rounded-full" src="../img/Homeprofileimg1.png" alt="ProfileImg"/>
                            <p className="font-outfit text-[24px] font-semibold">Zarie Westervelt</p>
                            <p className="font-Inter font-medium text-slate-500">928 Completed tasks</p>
                        </div>
                        <hr className="border-1 border-gray-300 mt-10 mx-8"/>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[18px]">Appliance Repair</p>
                            <p className="font-outfit font-semibold text-[18px]">$20/hr</p>
                        </div>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[18px]">Plumbing Repair</p>
                            <p className="font-outfit font-semibold text-[18px]">$24/hr</p>
                        </div>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[18px]">Electronics Repair</p>
                            <p className="font-outfit font-semibold text-[18px]">$23/hr</p>
                        </div>
                    </div>
                    <div className="mt-8 ">
                        <p className="font-outfit text-center text-[24px] font-semibold">I'm Right person for the job </p>
                        <p className="font-Inter font-medium text-center">I have all the neccessary supplies and resources to make your transition simple, stree-free, and successful</p>
                    </div>
                </div>
                {/* 2 */}
                <div className=" w-[400px] h-[600px]">
                    <div className="border-[30px] border-b-0 rounded-[45px] rounded-b-none">
                        <div className="flex flex-col pt-6 space-y-2 items-center">
                            <img className="w-[120px] h-[120px] rounded-full" src="../img/Homeprofileimg2.png" alt="ProfileImg"/>
                            <p className="font-outfit text-[24px] font-semibold">Zarie Westervelt</p>
                            <p className="font-Inter font-medium text-slate-500">928 Completed tasks</p>
                        </div>
                        <hr className="border-1 border-gray-300 mt-10 mx-8"/>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[18px]">Appliance Repair</p>
                            <p className="font-outfit font-semibold text-[18px]">$20/hr</p>
                        </div>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[18px]">Plumbing Repair</p>
                            <p className="font-outfit font-semibold text-[18px]">$24/hr</p>
                        </div>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[18px]">Electronics Repair</p>
                            <p className="font-outfit font-semibold text-[18px]">$23/hr</p>
                        </div>
                    </div>
                    <div className="mt-8 ">
                        <p className="font-outfit text-center text-[24px] font-semibold">I'm Right person for the job </p>
                        <p className="font-Inter font-medium text-center">I have all the neccessary supplies and resources to make your transition simple, stree-free, and successful</p>
                    </div>
                </div>
                {/* 3 */}
                <div className=" w-[400px] h-[600px]">
                    <div className="border-[30px] border-b-0 rounded-[45px] rounded-b-none">
                        <div className="flex flex-col pt-6 space-y-2 items-center">
                            <img className="w-[120px] h-[120px] rounded-full" src="../img/Homeprofileimg3.png" alt="ProfileImg"/>
                            <p className="font-outfit text-[24px] font-semibold">Zarie Westervelt</p>
                            <p className="font-Inter font-medium text-slate-500">928 Completed tasks</p>
                        </div>
                        <hr className="border-1 border-gray-300 mt-10 mx-8"/>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[18px]">Appliance Repair</p>
                            <p className="font-outfit font-semibold text-[18px]">$20/hr</p>
                        </div>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[18px]">Plumbing Repair</p>
                            <p className="font-outfit font-semibold text-[18px]">$24/hr</p>
                        </div>
                        <div className="flex justify-between mx-8 mt-3">
                            <p className="font-outfit font-semibold text-[18px]">Electronics Repair</p>
                            <p className="font-outfit font-semibold text-[18px]">$23/hr</p>
                        </div>
                    </div>
                    <div className="mt-8 ">
                        <p className="font-outfit text-center text-[24px] font-semibold">I'm Right person for the job </p>
                        <p className="font-Inter font-medium text-center">I have all the neccessary supplies and resources to make your transition simple, stree-free, and successful</p>
                    </div>
                </div>
            </div>
        </div>
    );
}