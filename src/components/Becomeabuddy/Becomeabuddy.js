export default function Becomeabuddy(){
    return (
        <div className="py-14 mx-[6.25rem]">
            <div className="flex justify-between">
                <div className="w-[60%]">
                    <div>
                        <p className="font-outfit font-semibold text-[24px] text-[#49108B] text-center py-6">MI Buddy Registeration Form</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <input className="border rounded-md font-mons py-2 pl-4 w-full outline-[#A367B1]" type="text" placeholder="First Name"/>
                            <input className="border rounded-md font-mons py-2 pl-4 w-full outline-[#A367B1]" type="text" placeholder="Last Name"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <input className="border rounded-md font-mons py-2 pl-4 w-full outline-[#A367B1]" type="email" placeholder="Your Email"/>
                            <input className="border rounded-md font-mons py-2 pl-4 w-full outline-[#A367B1]" type="text" placeholder="Your Phone Number"/>
                            <select className="border rounded-md font-mons py-2 pl-4 w-full outline-[#A367B1]">
                                <option>Electricians</option>
                                <option>Carpainter</option>
                                <option>Plumber</option>
                            </select>
                            <input className="border rounded-md font-mons py-2 pl-4 w-full outline-[#A367B1]" type="number" placeholder="Your Experience"/>
                            <input className="border rounded-md font-mons py-2 pl-4 w-full outline-[#A367B1]" type="text" placeholder="Your City"/>
                            <input className="border rounded-md font-mons py-2 pl-4 w-full outline-[#A367B1]" type="text" placeholder="Your State"/>
                            <input className="border rounded-md font-mons py-2 pl-4 w-full outline-[#A367B1]" type="text" placeholder="Your Condition 1"/>
                            <input className="border rounded-md font-mons py-2 pl-4 w-full outline-[#A367B1]" type="text" placeholder="Your Condition 2"/>
                        </div>
                        <button className="font-int font-semibold text-[20px] text-white py-2 rounded-md bg-[#49108B] mt-6">Register Now</button>
                    </div>
                </div>
                <div className="w-[30%] flex items-center">
                    <img className="w-full" src="../img/registerheaderbg.png" alt="image"/>
                </div>
            </div>
        </div>
    );
}