import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ServicesInfoSection = () => {
  return (
    <div className='px-[7%]'>
        <div>
            <p className='font-outfit font-semibold text-[46px] leading-[3.5rem] w-[50%] fadeInTop'>Skilled trade services tailored to meet your needs</p>
        </div>
        <div className='grid grid-cols-[1.4fr,1.5fr] gap-20 font-int  pr-[7%] mt-[5%]'>
            <p className='font-outfit font-medium text-[38px] leading-none'>Skilled trade services tailored to meet your needs</p>
            <p className='font-outfit text-[18px]'>Connecting users with skilled tradespeople for service requests, alongside a feature for users to register as service providers themselves, fostering a dynamic marketplace for trades</p>
        </div>
        <div className='grid grid-cols-2 items-center px-[4%]'>
            <div>
                <img src="../../img/servicesInfoImg1.png" alt="" className='w-full h-[400px] ' />
            </div>
            <div className='font-int flex flex-col gap-2'>
                <p className='font-medium text-[22px]'>Discover Our Skilled Trade Services</p>
                <p>Our platform offers a diverse array of skilled trade services, including plumbing, carpentry, and electrical work, among others. Whether you need repairs, installations, or maintenance, our network of experienced professionals is ready to assist you. Explore our range of services to find the right solution for your home or business needs.</p>
            </div>
        </div>
        <div className='grid grid-cols-2 items-center px-[4%]'>
            <div className='font-int flex flex-col gap-2'>
                <p className='font-medium text-[22px]'>Become a Service Provider</p>
                <p>For skilled tradespeople, our platform offers a unique opportunity to showcase your expertise and connect with potential clients. By registering as a service provider, you can directly offer your services to users seeking assistance with various projects. Join our community of tradespeople and start expanding your reach to a broader audience.</p>
                <div className='flex gap-2 items-center w-max px-6 mt-4 py-2 '>
                    <p className='font-int text-[18px] font-medium'>Get Your Personal buddy</p>
                    <Link to={'/'} className='bg-gray-500 p-2 rounded-full cursor-pointer'>
                        <GoArrowUpRight fontSize={'2rem'}/>
                    </Link>
                </div>
            </div>
            <div>
                <img src="../../img/servicesInfoImg2.jpg" alt="" className='w-full h-[400px] ' />
            </div>
        </div>
    </div>
  )
}

export default ServicesInfoSection