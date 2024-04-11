"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { twMerge } from "tailwind-merge";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import FooterItem from "./FooterItem";
import { Kanit } from "next/font/google";

const inter = Kanit({ subsets: ["latin"], weight: ['400'] });


interface FooterProps {
  children: React.ReactNode;
  className?:string;
}

const Footer :React.FC<FooterProps> = ({ children ,className }) => {
    const pathname=usePathname();
    const Companyroutes=useMemo(()=>[
      {
        label:'ABOUT US',
        active: pathname !== '/about-us', 
        href:'/about-us'
    },
    {
        label:'PRIVACY POLICY',
        active: pathname === '/privacy-policy',
        href:'/privacy-policy'
    },
    {
      label:'TERMS AND CONDITIONS',
        active: pathname === '/terms-and-conditions',
        href:'/terms-and-conditions'
    },
      ],[]);
      const Gymroutes=useMemo(()=>[
        {
            label:'FIND MY GYM',
            active: pathname === '/find-gym',
            href:'/find-gym'
        },
        {
          label:'FAQS',
          active: pathname !== '/faqs',
          href:'/faqs'
      },
      {
          label:'CONTACT US',
          active: pathname === '/contact-us',
          href:'/contact-us'
      },
      {
          label:'EVENTS AND GALLERY',
          active: pathname === '/events-and-gallery', 
          href:'/gallery'
      },

        ],[]);  

        return (
          <div
            className={twMerge(`
               sm:h-[250px]
               w-full
               bottom-0
              bg-slate-600
              p-6
              ${inter.className}
              `,
              className
            )}>
                <div className="sm:flex sm:justify-between mt-4">
                    <div className="">
                        <p className="text-lime-200 px-4 text-3xl">COMPANY</p>
                        <div className=" text-xl  text-white  mt-4">
                            {Companyroutes.map((item) => (
                            <FooterItem key={item.label} {...item} />
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <p className="text-lime-200 px-4 text-3xl">GYM</p>
                        <div className=" text-xl  text-white  mt-4">
                            {Gymroutes.map((item) => (
                            <FooterItem key={item.label} {...item} />
                            ))}
                        </div>
                    </div>  
                    <div className=" flex mt-4">
                        <FaInstagram className="mx-2 hover:cursor-pointer" color="white" size={30}/> 
                        <FaFacebook className="mx-2 hover:cursor-pointer" color="white" size={30}/>
                        <FaLinkedin className="mx-2 hover:cursor-pointer" color="white" size={30}/>
                        <FaTwitter className="mx-2 hover:cursor-pointer" color="white" size={30}/>
                        <FaYoutube className="mx-2 hover:cursor-pointer"  color="white" size={30}/>
                    </div>   
                </div>
            
            {children}
          </div>
        );
};

export default Footer;