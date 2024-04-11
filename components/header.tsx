"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import trushdex from "next/font/local";

import { twMerge } from "tailwind-merge";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import Image from "next/image";
import logo from "../public/images/logo2.jpg";
import HeaderItem from "./HeaderItem";
import Link from "next/link";


interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

// const pacifico = Pacifico({ subsets: ["latin"], weight: ['400'] });v'../../public/fonts/Trushdex.ttf'

const myfont = trushdex({
  src: "../public/fonts/Trushdex.ttf"
})

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const pathname = usePathname();
  const router = useRouter();


  const routes = useMemo(() => [
    {
      label: 'Home',
      active: pathname !== '/',
      href: '/'
    },
    {
      label: 'WHY JOIN US',
      active: pathname === '/membership',
      href: '/membership'
    },
    {
      label: 'TRAINING',
      active: pathname === '/training',
      href: '/training'
    },
    {
      label: 'FIND MY GYM',
      active: pathname === '/find-gym',
      href: '/find-gym'
    },
  ], []);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={twMerge(`
              min-h-[100px]
              max-h-fit 
              bg-black scale-smooth
              sm:fixed top-0 w-full
              p-6 z-50 opacity-100
              ${isScrolled ? 'opacity-65' : 'opacity-100'}
              `,
        className
      )}>
      <div className={`${myfont.className} w-full mb-4`}>
        <div className="flex flex-col ">
          <div className="flex justify-between sm:w-full">
            <Image src={logo} alt="logo" width={100} height={100} onClick={() => router.push('/')} className="sm:h-400" />
            <div className="pl-1 sm:pl-4 pt-4 text-bold my-auto text-3xl text-white">
              <p className="text-center"><Link href='/'>Core Fit Gym</Link> </p>
            </div>
            <div className="hidden sm:flex justify-end md:flex  my-auto text-md sm:text-2xl  text-white mx-auto tracking-wider ">
              {routes.map((item) => (
                <HeaderItem key={item.label} {...item} />
              ))}
            </div>
            <div className="flex md:hidden  items-center">
          <button
            onClick={handleClick}
            className="
                    rounded-full 
                    pb-10
                    pl-2
                    cursor-pointer 
                    hover:opacity-75 
                    transition
                    z-50
                  "
          >
            {!isOpen ? <IoReorderThreeOutline className="text-white" size={30} /> : <RxCross2 className="text-white" size={20} />}
          </button>
        </div>
          </div>
          {isOpen && <>
            <div className="flex flex-col mt-2 text-2xl  text-white mx-auto  items-end tracking-wider">
              {routes.map((item) => (
                <HeaderItem key={item.label} {...item} />
              ))}
            </div>
          </>}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;