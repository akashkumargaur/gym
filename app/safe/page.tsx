"use client";
import Image from "next/image";
import safepg from "../../public/images/assets/safe2.png";
import safe1 from "../../public/images/assets/1.png";
import safe2 from "../../public/images/assets/2.png";
import safe3 from "../../public/images/assets/3.png";
import safe4 from "../../public/images/assets/4.png";
import safe5 from "../../public/images/assets/5.png";
import safe6 from "../../public/images/assets/6.png";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const Safe = () => {

    return (
        <div className="  bg-blue-100 
        rounded-lg 
        h-fit 
        w-full 
        overflow-hidden  sm:mt-[110px]
        overflow-y-auto">
            <div className="container ml-auto py-6 h-fit  ">
                <div className="text-cyan-800   font-bold ">
                    <h1 className="text-xl mt-4 flex justify-center sm:text-5xl">WE'RE READY TO KEEP YOU SAFE </h1>
                    <Image src={safepg} className="h-[200px] mt-4 w-[200px] mx-auto bg-blend-normal " alt="image" />
                    <div className="bg-[url('/images/bg_temp.png')]  mt-6  hidden sm:block">
                        <Carousel>
                            <CarouselContent className="  mt-8  mx-auto ">
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                                    <div className=" h-[200px] sm:h-[300px]">
                                        <h2 className="text-sm font-extrabold p-8 text-cyan-900 sm:text-xl text-bold text-end">SANITIZING STATIONS</h2>
                                        <Image src={safe1} className="h-[100px] w-[100px] sm:h-[150px] mt-4 sm:w-[150px] mx-auto bg-blend-normal " alt="image" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                                    <div className=" h-[200px] sm:h-[300px]">
                                        <h2 className="text-sm font-extrabold p-8 text-cyan-900 sm:text-xl text-bold text-center">CLEANING ENSURED</h2>
                                        <Image src={safe2} className=" h-[100px] w-[100px] sm:h-[150px] mt-4 sm:w-[150px] mx-auto bg-blend-normal " alt="image" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                                    <div className=" h-[200px] sm:h-[300px]">
                                        <h2 className="text-sm font-extrabold p-8 text-cyan-900 sm:text-xl text-bold text-center">AC & VENTILATION</h2>
                                        <Image src={safe6} className="h-[100px] w-[100px] sm:h-[150px] mt-4 sm:w-[150px] mx-auto bg-blend-normal " alt="image" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                                    <div className=" h-[200px] sm:h-[300px]">
                                        <h2 className="text-sm font-extrabold p-8 text-cyan-900 sm:text-xl text-bold text-center">CROWD MANAGEMENT</h2>
                                        <Image src={safe3} className="h-[100px] w-[100px] sm:h-[150px] mt-4 sm:w-[150px] mx-auto bg-blend-normal " alt="image" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
                                    <div className=" h-[200px] sm:h-[300px]">
                                        <h2 className="text-sm font-extrabold p-8 text-cyan-900 sm:text-xl text-bold text-center">SOCIAL DISTANCING</h2>
                                        <Image src={safe5} className="h-[100px] w-[100px] sm:h-[150px] mt-4 sm:w-[150px] mx-auto bg-blend-normal " alt="image" />
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>
                    <div className=" mt-6   sm:hidden">
                        <div className=" h-[200px] sm:h-[300px]">
                            <h2 className="text-sm font-extrabold p-8 text-cyan-900 sm:text-xl text-bold text-center">SANITIZING STATIONS</h2>
                            <Image src={safe1} className="h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] mx-auto bg-blend-normal " alt="image" />
                        </div>
                        <div className=" h-[200px] sm:h-[300px]">
                            <h2 className="text-sm font-extrabold p-8 text-cyan-900 sm:text-xl text-bold text-center">CLEANING ENSURED</h2>
                            <Image src={safe2} className=" h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] mx-auto bg-blend-normal " alt="image" />
                        </div>
                        <div className=" h-[200px] sm:h-[300px]">
                            <h2 className="text-sm font-extrabold p-8 text-cyan-900 sm:text-xl text-bold text-center">AC & VENTILATION</h2>
                            <Image src={safe6} className="h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] mx-auto bg-blend-normal " alt="image" />
                        </div>
                        <div className=" h-[200px] sm:h-[300px]">
                            <h2 className="text-sm font-extrabold p-8 text-cyan-900 sm:text-xl text-bold text-center">CROWD MANAGEMENT</h2>
                            <Image src={safe3} className="h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] mx-auto bg-blend-normal " alt="image" />
                        </div>
                        <div className=" h-[200px] sm:h-[300px]">
                            <h2 className="text-sm font-extrabold p-8 text-cyan-900 sm:text-xl text-bold text-center">SOCIAL DISTANCING</h2>
                            <Image src={safe5} className="h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] mx-auto bg-blend-normal " alt="image" />
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Safe;