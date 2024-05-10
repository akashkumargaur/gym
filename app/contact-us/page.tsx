"use client";

import Image from "next/image";
import loacaton from "../../public/images/map.png";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { useRouter } from "next/navigation";




const Contact = () => {

    const router = useRouter();

    return (
        <div className="   text-black
        rounded-lg 
        h-fit 
        w-full 
        overflow-hidden  sm:mt-[150px]
        overflow-y-auto">
            <div className="container ml-auto py-6 h-fit  ">
                <div className=" font-bold ">
                    <h1 className="text-xl mt-4 flex justify-center sm:text-5xl">We&apos;d Love to Hear from You </h1>
                    <p className="text-sm mb-4 text-blue text-opacity-10 mt-4 flex justify-center sm:text-md">You can allso contact to our what&apos;s app number</p>
                    <a target="_blank" href="https://www.google.com/maps/place/CORE-FIT+GYM/@26.936183,75.7893125,16z/data=!4m6!3m5!1s0x396db3ff94b2f981:0x727d3c433525aacf!8m2!3d26.9364126!4d75.7966182!16s%2Fg%2F11v613rlsj?entry=ttu"> <Image src={loacaton} alt="location" /></a>
                    <h1 className="text-xl mt-8 flex justify-center sm:text-5xl">GET IN TOUCH </h1>
                    <p className="text-sm mb-4  mt-4 flex justify-center text-gray-700 sm:text-xl">WE ARE ALWAYS READY TO HEAR FROM YOU  </p>
                    <div className="sm:flex sm:justify-between  sm:flex-grow  mt-10 mx-auto sm:w-[60%] w-full  ">
                        <div className=" mx-4  font-bold text-center sm:text-start">
                            <CiLocationArrow1 className="text-center rounded-xl sm:text-start mx-auto" size={50} />
                            <h1 className="p-2 text-4xl  text-center  sm:text-3xl">Head Office </h1>
                            <p className="hover:text-green-800 italic text-xl mt-2  p-2 text-gray-700"><a href="https://www.google.com/maps/place/CORE-FIT+GYM/@26.936183,75.7893125,16z/data=!4m6!3m5!1s0x396db3ff94b2f981:0x727d3c433525aacf!8m2!3d26.9364126!4d75.7966182!16s%2Fg%2F11v613rlsj?entry=ttu" target="_blank" className="text-xl"> Jaipur , Rajasthan </a></p>
                        </div>
                        <div className=" mx-4  font-bold text-center sm:text-start">
                            <FaPhoneAlt className="text-center  rounded-xl sm:text-start mx-auto" size={50} />
                            <h1 className="p-2 text-4xl  text-center sm:text-3xl">Call Us </h1>
                            <p className="hover:text-green-800 italic text-xl  mt-2 p-2 text-gray-700"><a href="tel: +919785829526" target="_blank" className="text-xl"> 9785829526 </a></p>
                        </div>
                        <div className=" mx-4 font-bold text-center sm:text-start">
                            <FaMailBulk className="text-center  rounded-xl sm:text-start mx-auto" size={50} />
                            <h1 className="p-2 text-4xl  text-center sm:text-3xl">Mail US </h1>
                            <p className=" hover:text-green-800 italic text-xl mt-2  p-2 text-gray-700"> <a href="mailto: corefit18@gmail.com" target="_blank" className="text-xl"> corefit18@gmail.com </a></p>
                        </div>
                    </div>
                    <h1 className="text-xl mt-8 flex justify-center sm:text-5xl">Give us feedback!</h1>
                    <p className="text-sm mb-4   mt-6 flex justify-center text-gray-600 sm:text-xl">To Provide feedback for a specific club (e.g. great services, suggestions, etc. ) click the button below.</p>
                </div>
                

            </div>
            <button onClick={()=>router.push('/inquiry')} className="text-md flex center sm:text-4xl mx-auto mt-4 border-4 w-fit border-lime-300 hover:bg-slate-500 hover:text-black font-bold py-2 px-4 rounded-full">Member Inquiry</button>

            <div className="bg-[url('/images/bg_temp.png')]  mt-6 pt-8 pb-8 ">
                <h1 className="text-xl text-cyan-800 mt-6 flex justify-center sm:text-5xl">I want to sign up for a membership</h1>
                <p className="text-sm mb-4 text-blue text-opacity-10 mt-4 flex justify-center sm:text-xl"> Contact Us for more information about our membership options. We look forward to hearing from you!</p>
            </div>
        </div>
    );
};

export default Contact;