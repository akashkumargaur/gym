"use client";

import { twMerge } from "tailwind-merge";

import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


interface SubHeaderProps {
    children: React.ReactNode;
    className?: string;
}

// const pacifico = Pacifico({ subsets: ["latin"], weight: ['400'] });v'../../public/fonts/Trushdex.ttf'



const SubHeader: React.FC<SubHeaderProps> = ({ children, className }) => {


    return (
        <div
            className={twMerge(`
              h-[95px]
              md:h-[80px]
              md:min-h-[80px]
              max-h[80px]
              bg-slate-600 text-white text-sm sm:text-xl scale-smooth
              top-0 w-full
              pl-6 pt-2 pb-2 z-50 opacity-100
              `,
                className
            )}>
            <div className={` w-full mb-4 sm:flex justify-between `}>
                <div className="">
                    <div className=" flex">
                        <Link href="mailto: corefit18@gmail.com" target="_blank">
                            <p className=" flex pr-2 text-sm"><FaMailBulk className=" rounded-xl " size={25} />corefit18@gmail.com</p></Link>  |
                        <Link href="https://www.google.com/maps/place/CORE-FIT+GYM/@26.936183,75.7893125,16z/data=!4m6!3m5!1s0x396db3ff94b2f981:0x727d3c433525aacf!8m2!3d26.9364126!4d75.7966182!16s%2Fg%2F11v613rlsj?entry=ttu" target="_blank">
                            <p className="pl-2 flex text-sm"><FaMapMarkerAlt className=" rounded-xl " size={25} />Jaipur, Rajasthan
                            </p></Link>
                    </div>
                    <Link href="tel: +919785829526" target="_blank">
                        <p className="pl-2 flex pt-2 text-sm"><FaPhoneAlt className=" rounded-xl " size={20} />+91-9785829526</p></Link>
                </div>
                <div className=" flex my-auto">
                    <a href="https://www.instagram.com/corefitgym_18?igsh=ZzQ0MWFjdXg3bXV2" target="_blank"><FaInstagram className="mx-2 hover:cursor-pointer" color="white" size={30} /> </a>
                    <a href="https://www.facebook.com/jangid.himanshu.94" target="_blank"><FaFacebook className="mx-2 hover:cursor-pointer" color="white" size={30} /></a>
                    <a href="https://www.linkedin.com/in/core-fit-gym-10b4782b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin className="mx-2 hover:cursor-pointer" color="white" size={30} /></a>
                    <a href="https://youtube.com/@corefit18?si=TUzWIHnVCr0C2VUx" target="_blank"><FaYoutube className="mx-2 hover:cursor-pointer" color="white" size={30} /></a>
                </div>
            </div>
            {children}
        </div>
    );
};

export default SubHeader;