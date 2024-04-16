"use client";

import Link from "next/link";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";

interface InstaProps {
    children: React.ReactNode;
    className?: string;
}

const Insta: React.FC<InstaProps> = ({ children, className }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };


    return (
        <div className="fixed shadow-2xl shadow-black opacity-70 h-fit right-5 bottom-24 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-xl p-2 mr-4 hover:cursor-pointer">
            {/* {isOpen ?
                <div className="relative  bottom-20 bg-green-100 text-green-700 rounded-xl p-2  hover:cursor-pointer">
                    <button className=" " onClick={handleClick}>
                        <MdOutlineMessage size={50} /></button>
                </div> : <>
                    </>} */}
            {/* {isOpen ? <div className="">
                <div className="mb-2  bottom-20 bg-green-100 text-green-700 rounded-xl p-2  hover:cursor-pointer">
                    <button className=" " onClick={handleClick}>
                        <MdOutlineMessage size={50} /></button>
                </div>
                <button className="h-fit" onClick={handleClick}><MdOutlineMessage size={50} />
                </button>
            </div> : <><button><IoClose onClick={handleClick} size={50} /></button></>} */}

            <Link href={'https://www.instagram.com/corefitgym_18?igsh=ZzQ0MWFjdXg3bXV2'} target="_blank"><FaInstagram color="white" onClick={handleClick} size={35} /></Link>
        </div>

    );
};

export default Insta;