"use client";

import Image from "next/image";
import location from "../../public/images/map.png";

const FindGym  = () => {
    
    return (
        <div className="  bg-blue-100 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto">
          <a target="_blank" href="https://www.google.com/maps/place/CORE-FIT+GYM/@26.936183,75.7893125,16z/data=!4m6!3m5!1s0x396db3ff94b2f981:0x727d3c433525aacf!8m2!3d26.9364126!4d75.7966182!16s%2Fg%2F11v613rlsj?entry=ttu">
             <Image className="w-full h-full p-4  object-cover hover:cursor-pointer" src={location}  alt="location" />
             </a>
        </div>
      );
};

export default FindGym;