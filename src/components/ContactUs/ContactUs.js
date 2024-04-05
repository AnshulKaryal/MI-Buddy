export default function ContactUs(){
    return (
        <div>
            <div className="flex flex-col justify-center items-center my-20 space-y-4">
                <div>
                    <p className="font-outfit font-semibold text-[24px] text-[#49108B]">Contact Us</p>
                </div>
                <div>
                    <p className="font-Inter font-bold text-[40px]">For Any Query, Let Me Help You</p>
                </div>
                <div className="w-[50%] flex flex-col gap-2">
                    <div className="flex gap-2">
                        <input className="border rounded-md font-mons py-2 pl-4 w-full outline-[#A367B1]" type="text" placeholder="Your Name"/>
                        <input className="border rounded-md font-mons py-2 pl-4 w-full outline-[#A367B1]" type="email" placeholder="Your Email"/>
                    </div>
                    <input className="border rounded-md font-mons py-2 pl-4 outline-[#A367B1]" type="text" placeholder="Subject"/>
                    <textarea className="border rounded-md font-mons py-2 pl-4 outline-[#A367B1]" type="text" placeholder="Message"/>
                    <button className="font-Inter font-semibold text-[20px] text-white py-2 rounded-md bg-[#49108B]">Send Message</button>
                </div>
            </div>
        </div>
    );
}