import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = () => {
        navigate("/");
      };

    return (
        <div className=" flex flex-col items-center pt-20 mx-[6.25rem] h-[500px]">
            <div className="px-8 py-10 space-y-6 border rounded-xl w-[50%]">
                <div clas>
                    <p className="font-mons font-bold text-[24px]">Login</p>
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="w-full border border-[#9D9D9D] rounded-md">
                        <input className="font-Inter text-[#9D9D9D] text-[18px] w-full rounded-md p-2 pl-3 h-[48px] font-Montserrat outline-none" type="text" placeholder="Email*" required/>
                    </div>
                    <div className="flex items-center w-full border border-[#9D9D9D] rounded-md">
                        <input className="font-Inter  text-[#9D9D9D] text-[18px] w-full rounded-md p-2 pl-3 h-[48px] font-Montserrat outline-none" type={showPassword ? "text" : "password"} placeholder="Password*" required/>
                        {showPassword ? <FaEyeSlash className="w-[20px] h-[20px] mr-4" onClick={() => setShowPassword(!showPassword)} /> : <FaEye className="w-[20px] h-[20px] mr-4" onClick={() => setShowPassword(!showPassword)} />}
                    </div>
                </div>
                <div className="flex justify-center">
                    <button onClick={handleRegister} className="w-full h-[48px] font-Montserrat font-mons font-bold text-white text-[22px] rounded-full p-2 pl-3 bg-[#7F27FF] hover:bg-[#A367B1]" type="submit">Login Now</button>
                </div>
                <div className="flex justify-center">
                    <p className="font-mons ">Are you a new User? <Link to='/Register' className="font-semibold text-[#7F27FF] hover:text-[#A367B1]">Register Now</Link> </p>
                </div>
            </div>
        </div>
    );
}