"use client";

import Image from "next/image";
import building from "@/public/images/building.jpg"
import counter from "@/public/images/counter.jpg"
import floor from "@/public/images/floor.jpg"
import stair from "@/public/images/stair.jpg"


const Gallery = () => {

    return (
        <div className=" text-black
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden  sm:mt-[250px]
        overflow-y-auto">
            <div className="container ml-auto py-6 h-fit  ">
                <div className="   font-bold ">
                    <h1 className="text-xl mt-4 flex justify-center sm:text-5xl">Gallery</h1>
                    <div className=" grid-cols-4 gap-4 pb-4  sm:grid">
                        <Image src={building} alt="herosection" className=" pt-4 object-cover object-center " />
                        <Image src={counter} alt="gallery" className="pt-4 object-cover object-center " />
                        <Image src={floor} alt="gallery" className="pt-4 object-cover object-center " />
                        <Image src={stair} alt="gallery" className="h-30 pt-4  object-cover object-center " />

                    </div>
                </div>

            </div>


        </div>
    );
};

export default Gallery;