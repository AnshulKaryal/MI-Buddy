import { Link } from "react-router-dom";

export default function HomeReview(){
    return (
        <div className="bg-[#7F27FF] h-[130px] flex justify-between items-center px-[6.25rem]">
            <div>
                <p className="font-outfit text-white text-[40px] font-bold">1.1+ Million Reviews</p>
                <p className="text-white font-mons font-semibold text-[14px]"><span className="font-normal">in categories </span>Appliance Repairs, Home Repairs and Help Moving</p>
            </div>
            <div className="flex space-x-10 my-5">
                <Link to='/' className=''><img className="rounded-xl w-[160px] border-2 border-white" src="../img/appstore.png"/></Link>
                <Link to='/' className=''><img className="rounded-xl w-[160px] border-2 border-white" src="../img/googleplaystore.png"/></Link>
            </div>
        </div>
    );
}