import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import HomeReview from "../HomeReview/HomeReview";
import HomeFeatures from "../HomeFeatures/HomeFeatures";
import Homecards from "../Homecards/Homecards";
import HomeCustomerReview from "../HomeCustomerReview/HomeCustomerReview";

export default function Home(){
    return (<>
        <div className="h-[83vh] flex justify-between pt-20 mx-[6.25rem]">
            <div className="w-[45%]">
                <div>
                    <div>
                        <p className="w-max font-mons font-semibold py-1 px-2 rounded-lg text-[16px] bg-[#F5DD61]">ON-DEMAND SERVICE PLATFORM</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="font-outfit text-gray-900 font-extrabold text-[50px] leading-none">On-demand home services are just a click away!</p>
                </div>
                <div className="mt-4">
                    <p className="font-Inter font-semibold text-[16px] text-gray-600">Enjoy quick, reliable solutions when you need them most with our on-demand services.</p>
                </div>
                <div className="flex items-center justify-between gap-x-3 border-2 mt-6 h-12 rounded-lg w-full border-gray-500">
                    <div className="flex items-center gap-x-3 pl-6 ">
                        <CiSearch className="text-black w-[28px] h-[28px]" /> <input className="font-normal font-mons text-[18px] text-[#4335c1] " type="text" placeholder="I need help with..."/>
                    </div>
                    <div className="bg-[#7F27FF] w-[35%] h-full text-center flex items-center rounded-r-md hover:bg-[#A367B1]x">
                        <button className=" font-semibold font-Inter pl-6 text-[18px] text-white ">
                            Get Help today
                        </button>
                    </div>
                </div>
                <div className="space-x-4 mt-4">
                    <Link className="font-semibold font-mons text-[12px] text-[#4335c1] border-2 py-[5px] px-4 rounded-lg border-[#4335c1] hover:text-[#A367B1] hover:border-[#A367B1]" to="/">Appliance Repairs</Link>
                    <Link className="font-semibold font-mons text-[12px] text-[#4335c1] border-2 py-[5px] px-4 rounded-lg border-[#4335c1] hover:text-[#A367B1] hover:border-[#A367B1]" to="/">Home Repairs</Link>
                    <Link className="font-semibold font-mons text-[12px] text-[#4335c1] border-2 py-[5px] px-4 rounded-lg border-[#4335c1] hover:text-[#A367B1] hover:border-[#A367B1]" to="/">Help Moving</Link>
                    <Link className="font-outfit font-semibold text-[16px] hover:text-slate-600" to="/">See more</Link>
                </div>
            </div>
            <div>
                <img className='h-full object-cover' src="../img/Homeimg1.png"/>
            </div>
        </div>
        <HomeReview/>
        <HomeFeatures/>
        <Homecards/>
        <HomeCustomerReview/>
        </>
    );
}