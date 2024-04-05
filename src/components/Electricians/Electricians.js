import { FaSortAmountDown } from "react-icons/fa";
import { MdOutlineStars } from "react-icons/md";

export default function Electricians(){
    return (
        <div className="flex flex-col mt-10 items-center px-[6.25rem]">
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <div className="flex ">
                        <p className="font-Inter text-white font-semibold bg-[#E26EE5] py-2 px-4 text-[20px] rounded-xl">Choose your Electricians Buddy</p>
                    </div>
                    <div className="flex space-x-8">
                        <input className="border font-mons pl-4 rounded-md" type="text" placeholder="Search Name"/>
                        <div className="flex border items-center px-4 rounded-md justify-evenly space-x-4 cursor-pointer">
                            <FaSortAmountDown className="w-[20px] h-[20px] text-gray-600" />
                            <p className="font-Interfont-semibold py-2 text-[20px] text-gray-600 rounded-xl">Sort By</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between my-12">
                    {/* 1 */}
                    <div className="flex justify-between w-[45%] border rounded-lg shadow-2xl">
                        <div className="w-[40%]">
                            <img className="p-4" src="../img/Electricianimg1.png" alt="Electrician-img"/>
                        </div>
                        <div className="flex flex-col w-[60%] m-4 justify-between">
                            <div>
                                <p className="font-Inter font-semibold text-[20px]">Bablu yadav</p>
                                <div className="flex items-center space-x-2">
                                    <MdOutlineStars className="text-[#49108B] w-[14px] h-[14px]"/>
                                    <p className="font-mons text-[12px]">4.5 (2.3k reviews)</p>
                                </div>
                                <p className="font-Inter font-semibold text-[14px]">₹349/hr</p>
                                <p className="font-outfit text-[12px]">Exp: 5 Years</p>
                            </div>
                            <div>
                                <hr className="border-t border-dashed border-gray-500"/>
                                <div>
                                    <ul className="list-disc pl-4">
                                        <li className="font-outfit text-[12px]">Spare parts and wires are procured at an additional cost (market rate)</li>
                                        <li className="font-outfit text-[12px]">Actual prices based on scope of work and rate card</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 1 */}
                    <div className="flex justify-between w-[45%] border rounded-lg shadow-2xl">
                        <div className="w-[40%]">
                            <img className="p-4" src="../img/Electricianimg1.png" alt="Electrician-img"/>
                        </div>
                        <div className="flex flex-col w-[60%] m-4 justify-between">
                            <div>
                                <p className="font-Inter font-semibold text-[20px]">Bablu yadav</p>
                                <div className="flex items-center space-x-2">
                                    <MdOutlineStars className="text-[#49108B] w-[14px] h-[14px]"/>
                                    <p className="font-mons text-[12px]">4.5 (2.3k reviews)</p>
                                </div>
                                <p className="font-Inter font-semibold text-[14px]">₹349/hr</p>
                                <p className="font-outfit text-[12px]">Exp: 5 Years</p>
                            </div>
                            <div>
                                <hr className="border-t border-dashed border-gray-500"/>
                                <div>
                                    <ul className="list-disc pl-4">
                                        <li className="font-outfit text-[12px]">Spare parts and wires are procured at an additional cost (market rate)</li>
                                        <li className="font-outfit text-[12px]">Actual prices based on scope of work and rate card</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}