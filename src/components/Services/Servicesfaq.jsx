import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const Servicesfaq = () => {

  const [faqs, setFaqs] = useState([
    {
      question: "How can I request a service on this platform?",
      answer:
        "To request a service, simply browse our list of service categories, choose the one you need, and submit a detailed request outlining your requirements.",
      isOpen: false,
    },
    {
      question:
        "How do I become a service provider on this platform?",
      answer:
      "To become a service provider, navigate to the registration section on our platform, fill out the required information, and submit your application. Our team will review your profile and contact you regarding next steps.",
      isOpen: false,
    },
    {
      question: "What types of services are available on this platform?",
      answer:
        "We offer a range of services including plumbing, electrical work, carpentry, painting, appliance repair, and more. Explore our service categories to find the assistance you need.",
      isOpen: false,
    },
    {
      question:
        "How are service providers selected and vetted?",
      answer:
        "Service providers undergo a rigorous vetting process that includes background checks, verification of credentials, and assessment of previous work experience and customer feedback.",
      isOpen: false,
    },
    {
      question: "Can I review and compare service provider profiles?",
      answer:
        "Yes, you can review service provider profiles on our platform, which include details such as ratings, reviews, areas of expertise, and pricing information to help you make an informed decision.",
      isOpen: false,
    },
    {
      question: "What if I am not satisfied with the service I receive?",
      answer:
        "If you are not satisfied with the service provided, please contact our customer support team immediately. We are committed to resolving any issues promptly and ensuring your satisfaction with our services.",
      isOpen: false,
    },
  ]);

  function ClickSection(id) {
    const updatedFaqs = faqs.map((faq, index) => {
      if (index === id) {
        return { ...faq, isOpen: !faq.isOpen };
      } else {
        return { ...faq, isOpen: false };
      }
    });
    setFaqs(updatedFaqs);
  }


  return (
    <div className='px-[7%] py-[3%]'>
      <div>
         <p className='font-outfit font-semibold text-[46px] leading-[3.5rem] '>Frequently Asked Questions (FAQs) </p>
      </div>
      <div className='py-[3%] flex flex-col gap-6'>
        {faqs.map((item, index) => (
        <div key={index} className='px-6 py-3 border flex flex-col gap-8 rounded-xl cursor-pointer' onClick={() => ClickSection(index)}>
          <div className='flex justify-between items-center ' >
            <p className='font-int font-medium text-[20px]'>Q: {item.question}</p>
            <IoMdArrowDropdown className={`text-[28px]  ${item.isOpen ? "rotate-180 text-[#c83ccd]" : "rotate-0"}`}/>
          </div>
          {item.isOpen && (
          <div>
            <p className='font-int font-medium text-[18px]'>{item.answer}</p>
          </div>
          )}
        </div>
        ))}
      </div>
    </div>
  )
}

export default Servicesfaq