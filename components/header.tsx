"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { twMerge } from "tailwind-merge";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import Image from "next/image";
import logo from "../public/images/logo-main.png";
import HeaderItem from "./HeaderItem";
import Link from "next/link";
import SubHeader from "./subHeader";


interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

// const pacifico = Pacifico({ subsets: ["latin"], weight: ['400'] });v'../../public/fonts/Trushdex.ttf'



const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const pathname = usePathname();
  const router = useRouter();


  const routes = useMemo(() => [
    {
      label: 'HOME',
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
    {
      label: 'VIDEOS',
      active: pathname === '/videos',
      href: '/videos'
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
              min-h-[120px]
              max-h-fit 
              bg-slate-300 scale-smooth
              sm:fixed top-0 w-full
                z-50 opacity-100
              ${isScrolled ? 'opacity-65' : 'opacity-100'}
              `,
        className
      )}>
      {!isScrolled && <SubHeader><></></SubHeader>}
      <div className={` w-full `}>
        <div className="flex flex-col my-auto ">
          <div className="flex justify-between sm:w-full">
            <Image src={logo} alt="logo" width={100} height={100} onClick={() => router.push('/')} className="sm:h-400 cursor-pointer pl-2" />
            <div className="pl-1 sm:pl-4 pt-4 text-bold my-auto text-3xl ">
              <p className="text-center text-bold"><Link href='/'>CORE-FIT GYM</Link> </p>
            </div>
            <div className="hidden sm:flex justify-end md:flex  my-auto text-md sm:text-2xl   mx-auto tracking-wider ">
              {routes.map((item) => (
                <HeaderItem key={item.label} {...item} />
              ))}
            </div>
            <div className="flex md:hidden  my-auto">
              <div
                className="
                    rounded-full 
                    pl-2
                    cursor-pointer 
                  "
              >
                {!isOpen ? <div className="my-auto"><IoReorderThreeOutline onClick={handleClick} className="" size={30} /></div> : <RxCross2 onClick={handleClick} className="" size={20} />}
              </div>
            </div>
          </div>
          {isOpen && <>
            <div className="flex flex-col mt-2 text-2xl   mx-auto  items-end tracking-wider">
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