import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div>
            <div className="flex justify-between items-center  my-10 mx-[6.25rem]">
                <div>
                    <Link to="/"><img className="w-[11.5rem]" src="../img/logo.png" alt="logo"/></Link>
                </div>
                <div>
                    <div className="space-x-8 ">
                        <Link to='/' className='font-semibold font-mons text-[18px]'>Location</Link>
                        <Link to='/' className='font-semibold font-mons text-[18px]'>Service</Link>
                        <Link to='/' className='font-semibold font-mons text-[18px]'>Login/SignUp</Link>
                        <Link to='/' className='font-semibold font-mons text-[18px] text-[#4335c1] border-2 py-[5px] px-6 rounded-lg border-[#4335c1] hover:text-[#A367B1] hover:border-[#A367B1]'>Become a Buddy</Link>
                    </div>
                </div>
            </div>
            <div>
                <hr className="mt-4 border-2 border-gray-300"/>
            </div>
        </div>
    );
}