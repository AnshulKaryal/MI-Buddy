export default function HomeFeatures(){
    return (
        <div className=" flex flex-col items-center mt-24 mx-[6.25rem]">
            <div className="flex flex-col items-center space-y-4 w-[60%]">
                <p className="font-outfit text-5xl text-gray-800 font-bold">Everyday life made easier</p>
                <p className="font-mons text-[16px] text-center">When life get busy, you don't have to tackle it alone. Get time back for what you love without breaking the bank.</p>
            </div>
            <div className="flex justify-between w-[95%] mt-20">
                <div className="w-[40%] ">
                    <img className="h-[350px] rounded-3xl" src="../img/Homeimg2.png"/>
                </div>
                <div className="w-[50%]">
                    <div>
                        <p className="bg-slate-300 text-[14px] w-max px-4 py-2 font-Inter font-semibold rounded-md">FREEDOM FROM LAUNDRY</p>
                    </div>
                    <div className="mt-8">
                        <p className="font-outfit text-[40px] leading-none"><span className="font-semibold">On-demand</span> services designed for you</p>
                        <p className="mt-8 font-Inter text-gray-600 text-[16px] ">Make sure you select the perfect Buddy for your job by researching their reviews, expertise, and cost. Find a match that boasts all three of these criteria to ensure a successful outcome!</p>
                    </div>
                    <div className="mt-8">
                        <p className="font-outfit text-[16px] font-bold text-[#4335c1] hover:text-[#7E30E1] cursor-pointer w-max">See how it works</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-[95%] mt-20">
            <div className="w-[50%]">
                    <div>
                        <p className="bg-rose-100 w-max px-4 py-2 font-Inter text-[14px] font-semibold rounded-md">FREEDOM FROM LAUNDRY</p>
                    </div>
                    <div className="mt-8">
                        <p className="font-outfit text-[40px] leading-none"><span className="font-semibold">Schedule when it works</span> for you - as early as today</p>
                        <p className="mt-8 font-Inter text-gray-600 text-[16px] ">Now is the time to find a schedule that fits your lifestyle! Get started today and make sure you stay on track.</p>
                    </div>
                    <div className="mt-8">
                        <p className="font-outfit text-[16px] font-bold text-[#4335c1] hover:text-[#7E30E1] cursor-pointer w-max">See how it works</p>
                    </div>
                </div>
                <div className="w-[40%] ">
                    <img className="h-[350px] rounded-3xl" src="../img/Homeimg3.png"/>
                </div>
            </div>
            <div className="flex justify-between w-[95%] mt-20">
                <div className="w-[40%] ">
                    <img className="h-[400px] rounded-3xl" src="../img/Homeimg4.png"/>
                </div>
                <div className="w-[50%]">
                    <div>
                        <p className="bg-teal-100 w-max px-4 py-2 font-Inter text-[14px] font-semibold rounded-md">FREEDOM FROM LAUNDRY</p>
                    </div>
                    <div className="mt-8">
                        <p className="font-outfit text-[40px] leading-none">Let us be a <span className="font-semibold">comforting presence</span> for your journey ahead!</p>
                        <p className="mt-8 font-Inter text-gray-600 text-[16px] ">Our online customer support team is on hand to help you out - whatever the issue, day or night. We're here to make sure your delivery arrives promptly and that any bumps in the road are smoothed out quickly!</p>
                    </div>
                    <div className="mt-8">
                        <p className="font-outfit text-[16px] font-bold text-[#4335c1] hover:text-[#7E30E1] cursor-pointer w-max">See how it works</p>
                    </div>
                </div>
            </div>
        </div>
    );
}