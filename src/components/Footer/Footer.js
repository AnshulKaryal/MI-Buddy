import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer(){
    return (
        <div className="bg-[#7F27FF] h-[650px]">
            <div className="flex flex-col items-center pt-20 mx-72">
                <div className="my-5">
                    <p className="font-int text-5xl text-white text-center"><span className="font-semibold">Get more</span> done on the go</p>
                </div>
                <div className="my-5">
                    <p className="font-int font-light text-center text-[16px] text-white">Need done something fast? Download the app to book your Buddy, message them quickly and even send photo with ease - make it happen now!</p>
                </div>
                <div className="flex space-x-10 my-5">
                    <Link to='/' className=''><img className="rounded-xl w-[160px] border-[1.5px] border-white" src="../img/appstore.png"/></Link>
                    <Link to='/' className=''><img className="rounded-xl w-[160px] border-[1.5px] border-white" src="../img/googleplaystore.png"/></Link>
                </div>
            </div>
            <div className="flex justify-between mt-20 mx-[6.25rem] items-center">
                <div>
                    <Link to="/"><img className="w-[9rem]" src="../img/logowhite.png" alt="logo"/></Link>
                </div>
                <div className="space-x-14">
                    <Link to='/' className='font-int font-normal text-[16px] text-white'>About</Link>
                    <Link to='/' className='font-int font-normal text-[16px] text-white'>Services</Link>
                    <Link to='/' className='font-int font-normal text-[16px] text-white'>Locations</Link>
                    <Link to='/ContactUs' className='font-int font-normal text-[16px] text-white'>Contact Us</Link>
                </div>
                <div className="flex space-x-8">
                    <Link to='/'><FaTwitter className="text-white w-[20px] h-[20px]" /></Link>
                    <Link to='/'><FaFacebookF className="text-white w-[20px] h-[20px]"/></Link>
                    <Link to='/'><FaInstagram className="text-white w-[20px] h-[20px]"/></Link>
                    <Link to='/'><FaGithub className="text-white w-[20px] h-[20px]"/></Link>
                </div>
            </div>
            <div>
                <hr className="border-[1.5px] border-gray-300 mt-10 mx-[6.25rem]"/>
            </div>
            <div className="flex justify-between mt-16 mx-[6.25rem]">
                <div>
                    <p className="font-int font-light text-[16px] text-white">&copy; Copyright 2024, All Rights Reserved</p>
                </div>
                <div className="flex space-x-6">
                    <p className="font-int font-light text-[16px] text-white">Privacy Policy</p>
                    <p className="font-int font-light text-[16px] text-white">Terms & Conditions</p>
                </div>
            </div>
        </div>
    );
}