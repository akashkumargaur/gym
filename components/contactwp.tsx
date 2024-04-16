"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoClose } from "react-icons/io5";

interface WhatsAppProps {
    children: React.ReactNode;
    className?: string;
}

const WhatsApp: React.FC<WhatsAppProps> = ({ children, className }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };


    return (
        <div className="fixed shadow-2xl shadow-black opacity-70  h-fit right-5 bottom-6 bg-green-100 text-green-700 rounded-xl p-2 mr-4 hover:cursor-pointer">
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

            <Link href={'https://wa.me/919785829526'} target="_blank"><FaWhatsapp onClick={handleClick} size={35} /></Link>
        </div>

    );
};

export default WhatsApp;