import React from 'react'

const ServicesProcess = () => {
  return (
    <div className='bg-[#EFF2F8] px-[7%] py-[5%]'>
        <div className='font-outfit'>
            <p className='font-semibold text-[35px]'>Our Residential Service Providing Process:</p>
            <p className='font-semibold text-[30px]'>Simplify your job process</p>
        </div>
        <div className='grid grid-cols-3 gap-6'>
            <div className='border-b-2 border-black min-h-[150px]'>
                <div className='flex gap-2 items-center'>
                    <p className='font-outfit text-[24px] text-gray-500'>01.</p>
                    <p className='font-int font-medium text-[20px]'>Select Provider</p>
                </div>
                <p className='font-int'>Browse and choose a service provider based on ratings, reviews, and expertise showcased on our platform</p>
            </div>
            <div className='border-b-2 border-black min-h-[150px]'>
                <div className='flex gap-2 items-center'>
                    <p className='font-outfit text-[24px] text-gray-500'>02.</p>
                    <p className='font-int font-medium text-[20px]'>Submit Request</p>
                </div>
                <p className='font-int'>Detail your service needs and preferred date/time by submitting a comprehensive service request</p>
            </div>
            <div className='border-b-2 border-black min-h-[150px]'>
                <div className='flex gap-2 items-center'>
                    <p className='font-outfit text-[24px] text-gray-500'>03.</p>
                    <p className='font-int font-medium text-[20px]'>Receive Quotes</p>
                </div>
                <p className='font-int'>Get personalized quotes and additional details from service providers based on your specific requirements</p>
            </div> 
            <div className='border-b-2 border-black min-h-[150px]'>
                <div className='flex gap-2 items-center'>
                    <p className='font-outfit text-[24px] text-gray-500'>04.</p>
                    <p className='font-int font-medium text-[20px]'>Confirm Booking</p>
                </div>
                <p className='font-int'>Review quotes and provider profiles to select your preferred service provider and confirm the booking</p>
            </div>
            <div className='border-b-2 border-black min-h-[150px]'>
                <div className='flex gap-2 items-center'>
                    <p className='font-outfit text-[24px] text-gray-500'>05.</p>
                    <p className='font-int font-medium text-[20px]'>Service Completion</p>
                </div>
                <p className='font-int'>Enjoy timely and professional service delivery as per your scheduled appointment</p>
            </div>
            <div className='border-b-2 border-black min-h-[150px]'>
                <div className='flex gap-2 items-center'>
                    <p className='font-outfit text-[24px] text-gray-500'>06.</p>
                    <p className='font-int font-medium text-[20px]'>User Satisfaction</p>
                </div>
                <p className='font-int'>Rate your experience to maintain service quality and ensuring satisfaction and improvement in our service ecosystem.</p>
            </div>
        </div>
    </div>
  )
}

export default ServicesProcess