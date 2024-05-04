import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="sticky top-0 bg-white z-[999]">
            <div className="flex justify-between items-center  py-8 mx-[6.25rem]">
                <div>
                    <Link to="/"><img className="w-[10rem]" src="../img/logo.png" alt="logo"/></Link>
                </div>
                <div>
                    <div className="space-x-8 ">
                        <Link to='/' className='font-semibold font-mons text-[16px]'>Location</Link>
                        <Link to='/services' className='font-semibold font-mons text-[16px]'>Service</Link>
                        <Link to='/Login' className='font-semibold font-mons text-[16px]'>Login/SignUp</Link>
                        <Link to='/Becomeabuddy' className='font-semibold font-mons text-[16px] text-[#4335c1] border-2 py-[5px] px-6 rounded-lg border-[#4335c1] hover:text-[#A367B1] hover:border-[#A367B1]'>Become a Buddy</Link>
                    </div>
                </div>
            </div>
            <div>
                <hr className="border-[1.5px] border-gray-300"/>
            </div>
        </div>
    );
}