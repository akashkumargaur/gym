"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppProps {
    children: React.ReactNode;
    className?: string;
}

const WhatsApp: React.FC<WhatsAppProps> = ({ children, className }) => {
    return (
        <div className="fixed right-5 bottom-6 bg-green-100 text-green-700 rounded-xl p-2 hover:cursor-pointer">
            <Link href="https://wa.me/917300229967" target="_blank">
            <div className=" flex justify-between">
                    <FaWhatsapp color="green" size={32} />
                    <p className="pl-2 my-auto font-bold">Connect To Us Now</p>
            </div>
            </Link>
        </div>
    );
};

export default WhatsApp;