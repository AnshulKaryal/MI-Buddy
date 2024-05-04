import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhoneOutgoing } from "react-icons/fi";

const ServicesContactUs = () => {
  return (
    <div className="flex justify-between items-center gap-10 px-[7%]">
      <div className='w-[45%] flex flex-col gap-6'>
          <p className='font-outfit font-semibold text-[35px]'>Resolve your query in minutes with our efficient service</p>
          <Link className='font-semibold text-[25px] bg-[#A367B1] flex items-center w-max px-6 py-2 rounded-2xl text-white gap-4'>
            <p>Connect with Us</p>
            <FiPhoneOutgoing />
          </Link>
      </div>
      <div className='w-[55%]'>
        <img className='w-full' src="../../img/servicesContactUsimg.png" alt="" />
      </div>
    </div>
  )
}

export default ServicesContactUs