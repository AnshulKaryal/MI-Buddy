import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import HomeReview from "../HomeReview/HomeReview";
import HomeFeatures from "../HomeFeatures/HomeFeatures";
import Homecards from "../Homecards/Homecards";
import HomeCustomerReview from "../HomeCustomerReview/HomeCustomerReview";

export default function Home(){
    return (<>
        <div id="Home" className="h-[83vh] flex justify-between pt-10 mx-[6.25rem]">
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
                    <p className="font-int font-semibold text-[16px] text-gray-600">Enjoy quick, reliable solutions when you need them most with our on-demand services.</p>
                </div>
                <div className="flex items-center space-x-14 mt-6">
                    <Link to="/Electricians">
                        <div className="flex flex-col items-center border rounded-xl px-7 py-4 space-y-4 bg-[#F3F8FF] hover:text-[#7E30E1]">
                            <img className="w-[60px] " src="../img/electricianhomeimg.png" alt="electrician-logo"/>
                            <p className="font-mons font-semibold text-[#4335c1] ">Electrician</p>
                        </div>
                    </Link>
                    <Link to="/">
                    <div className="flex flex-col items-center border rounded-xl px-7 py-4 space-y-4 bg-[#F3F8FF] hover:text-[#7E30E1]">
                        <img className="w-[70px]" src="../img/carpainterhomeimg.png" alt="electrician-logo"/>
                        <p className="font-mons font-semibold text-[#4335c1] ">Carpainter</p>
                    </div>
                    </Link>
                    <Link to="/">
                    <div className="flex flex-col items-center border rounded-xl px-7 py-4 space-y-4 bg-[#F3F8FF] hover:text-[#7E30E1]">
                        <img className="w-[60px]" src="../img/plumberhomeimg.png" alt="electrician-logo"/>
                        <p className="font-mons font-semibold text-[#4335c1] ">Plumber</p>
                    </div>
                    </Link>
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