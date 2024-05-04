import React from 'react'
import { FaGripLines } from "react-icons/fa";
import "../Animations/Animations.css"

const ServicesMainSection = () => {
  return (
    <div className='relative mb-[28%]'>
        <div className='bg-[#EFF2F8]'>
            <div className='grid grid-cols-[1.4fr,1.5fr] px-[7%] gap-20 font-int pt-[5%] pr-[13%] pb-[15%]'>
                <div className='flex flex-col gap-4 fadeInLeft'>
                    <p className="w-max font-mons font-semibold py-1 px-2 rounded-lg text-[15px] bg-[#F5DD61] uppercase">Discover specialized trade services</p>
                    <p className='font-outfit font-semibold text-[52px] leading-[3.5rem]'>Skilled trade services tailored to meet your needs</p>
                </div>
                <div className='flex flex-col justify-end fadeInRight'>
                    <FaGripLines  className='text-gray-600 text-[20px]'/>
                    <p className='font-outfit text-[28px] leading-[2rem]'>Revolutionizing service requests and trade opportunities through connecting users with skilled professionals seamlessly</p>
                    <div className='flex justify-end'>
                        <FaGripLines  className='text-gray-600 text-[20px]'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-[7%] absolute w-full top-[67%] fadeInBottom'>
            <img src="../../img/servicesMainImg.png" alt="" className='w-full h-[450px]' />
        </div>
    </div>
  )
}

export default ServicesMainSection