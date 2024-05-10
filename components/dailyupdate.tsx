"use client"
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import useUpload from "@/hooks/useReelsModel";
import Image from "next/image";
import story from "@/public/images/story.png"

interface InstaProps {
    children: React.ReactNode;
    className?: string;
}

const Insta: React.FC<InstaProps> = ({ children, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const uploadModal = useUpload();

    const handleClick = () => {
        // setIsOpen(prev => !prev);
        return uploadModal.onOpen();
    };

    // Handle backdrop click to close the popover
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        // <>
        //     <Popover>
        //         <PopoverTrigger asChild>
        //             <div className="fixed z-20 right-5 bottom-44 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-xl p-2 mr-4 hover:cursor-pointer">
        //                 <FaInstagram color="white" onClick={handleClick} size={35} />
        //             </div>
        //         </PopoverTrigger>
        //         {isOpen && (
        //             <div className="fixed inset-0 z-10 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center p-4" onClick={handleClose}>
        //                 <PopoverContent onClick={e => e.stopPropagation()} className="bg-white rounded shadow-lg w-full h-full overflow-auto">
        //                     <div className="space-y-2 p-4">
        //                         <h4 className="font-medium leading-none">Instagram Feed</h4>
        //                         <p className="text-sm text-gray-500">
        //                             Explore our Instagram feed here.
        //                         </p>
        //                     </div>
        //                     <div className="grid gap-2 p-4">
        //                         {/* Placeholders for actual content */}
        //                         <div>Content placeholder</div>
        //                         <div>Content placeholder</div>
        //                         <div>Content placeholder</div>
        //                     </div>
        //                 </PopoverContent>
        //             </div>
        //         )}
        //     </Popover>
        // </>
        <div className="fixed z-20 right-1 bottom-40  rounded-xl p-2 mr-4 hover:cursor-pointer">
            {/* <FaInstagram color="white" onClick={handleClick} size={35} /> */}
            <Image onClick={handleClick} src={story} height={80} width={80} alt="daily update" />
            <h1 className="text-white pt-2" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>Daily Update</h1>


        </div>
    );
};

export default Insta;
