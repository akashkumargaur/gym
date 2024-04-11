"use client"

import Image from "next/image";
import herosection from "@/public/images/herosection.svg"
import herosection_sm from "@/public/images/herosection.jpg"
import Autoplay from "embla-carousel-autoplay"
import trushdex from "next/font/local";
import { Kanit } from "next/font/google";

const inter = Kanit({ subsets: ["latin"], weight: ['400'] });


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect } from "react";
import Link from "next/link";

const myfont = trushdex({
  src: "../../public/fonts/Trushdex.ttf"
})

export default function Home() {


  return (
    <main className="  
    rounded-lg 
    h-fit 
    w-full 
    bg-black
    text-white
    overflow-hidden 
    overflow-y-auto">
      <div className="relative bg-blue-100 rounded-lg h-full w-full">
        <Image src={herosection} alt="herosection" className="hidden w-full h-[100vh] object-cover object-center sm:flex" />
        <Image src={herosection_sm} alt="herosection" className=" w-full h-[100vh] object-cover object-center md:hidden" />
        <div className="absolute pl-[10%] inset-0 flex flex-col justify-center items-start">
          <h1 className={`text-xl ${myfont.className} pl-6 sm:text-5xl font-bold  text-white`}>Why Join Core Fit Gym</h1>
          <p className="text-sm   sm:text-md font-bold  mt-10 pt-4 text-white sm:w-[40%] sm:text-xl ">Begin your fitness adventure with a lively gym pass at Core  Fit Gym! Enter a realm where a friendly,
            inclusive community flourishes, bringing together individuals of every fitness level. </p>
        </div>
      </div>
      <div className="bg-black sm:flex sm:justify-center text-white p-2 pt-8 mt-4">
        <div className=" mx-auto my-auto sm:pl-4 sm:w-[60%] flex justify-center sm:justify-end  ">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/s8hWQwFwayo?si=0Icf8z8FzJ1lcBgx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="pl-6">
          <h1 className={`text-2xl ${myfont.className} font-extrabold p-8  sm:text-4xl text-bold `}>Gym, yoga, Cardio, Zumba & More - We Have It All </h1>
          <p className=" italic   text-sm text-bold   sm:text-xl  mt-2  sm:w-[70%] px-8 mb-2   ">Whether you&apos;re new to fitness or a seasoned enthusiast, our skilled trainers guide
            both group sessions and personalized workouts. These routines are crafted with practical expertise to support your fitness
            journey and foster a strong community.</p>
          <button className="bg-cyan-700 p-2 mx-8 mt-2 mb-2 px-4" ><Link href='/membership'> Know More</Link></button>
        </div>

      </div>
      <div className="  sm:flex p-2 mt-6">
        <div className="">
          <h1 className={`text-4xl ${myfont.className} font-extrabold p-8 text-white sm:text-4xl text-bold text-end`}>Stop Existing, Start Thriving</h1>
          <p className="  italic px-8 text-sm text-bold text-center   sm:text-xl  mt-3=2 sm:pl-[40%]  sm:text-start ">Are you tired of just going through the motions? Ready to ditch the routine and ignite your fitness journey? We get it. At Core Fit Gym, we&apos;re here to help you stop existing and start thriving. We offer personalized plans for all fitness levels, from high-energy Zumba to restorative yoga. Let our expert trainers guide you,  accommodate past injuries, and  unleash your inner athlete. It&apos;s time to feel your best and live life to the fullest.</p>
        </div>
        <div className=" mx-auto my-auto sm:pl-4  sm:w-[60%] flex justify-center sm:justify-start ">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/s8hWQwFwayo?si=0Icf8z8FzJ1lcBgx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      {/* <div className="bg-[url('/images/bg.png')] bg-cover sm:flex sm:justify-center bg-center bg-no-repeat p-2">
        <div className=" mx-auto my-auto sm:pl-4  sm:w-[60%] flex justify-center sm:justify-end  ">
          <iframe className="w-[560] h-[315] sm:w-[760] sm:h-[515]"  src="https://www.youtube.com/embed/vAO8P9UmVlk?si=YheH-1C3-ZothT3x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="">
          <h1 className="text-4xl font-extrabold p-8 text-cyan-900 sm:text-6xl text-bold ">IT'S TIME TO JOIN </h1>
          <p className="  text-sm text-bold   sm:text-xl  mt-4  sm:w-[50%] px-8 mb-2   ">Whether you're new to fitness or a seasoned enthusiast, our skilled trainers guide
          both group sessions and personalized workouts. These routines are crafted with practical expertise to support your fitness
            journey and foster a strong community.</p>
        </div>
        
      </div> */}
      <div className="bg-black sm:flex sm:justify-center text-white p-2 pt-8 pl-8 mt-4">
        <div className=" mx-auto my-auto sm:pl-4 sm:w-[60%] flex justify-center sm:justify-end  ">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/s8hWQwFwayo?si=0Icf8z8FzJ1lcBgx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="pl-2 mx-auto">
          <h1 className={`text-2xl ${myfont.className} font-extrabold p-8  sm:text-4xl text-bold `}>Call to Action Button </h1>
          <p className=" italic   text-sm text-bold   sm:text-xl  mt-2  sm:w-[70%] px-8 mb-2   ">Whether you&apos;re new to fitness or a seasoned enthusiast, our skilled trainers guide
            both group sessions and personalized workouts. These routines are crafted with practical expertise to support your fitness
            journey and foster a strong community.</p>
        </div>

      </div>
      {/* <div className="sm:flex p-2 mt-8">
        <div className="">
          <h1 className={`text-4xl ${myfont.className} font-extrabold p-8 text-white sm:text-6xl text-bold text-end`}>Call to Action Button</h1>
          <p className="italic px-8 text-sm text-bold   sm:text-xl  mt-2 sm:pl-[40%]  text-end ">Whether you're new to fitness or a seasoned enthusiast, our skilled trainers guide
            both group sessions and personalized workouts. These routines are crafted with practical expertise to support your fitness
            journey and foster a strong community.</p>
        </div>
        <div className=" mx-auto my-auto sm:pl-4  sm:w-[60%] flex justify-center sm:justify-start ">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/s8hWQwFwayo?si=0Icf8z8FzJ1lcBgx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div> */}
      {/* <div className="">
        <h1 className="text-4xl font-extrabold p-8 text-white sm:text-6xl text-bold text-start">OverAll Development</h1>
        <div className="flex">
          <p className="text-xl border rounded-full p-2 border-xl">1</p>
          <p className="pl-2 my-auto text-xl">Gym</p>
        </div>

      </div> */}
      {/* corosal */}
      <div className={` bg-[url('/images/bg_temp.png')] ${inter.className}  mt-6 embla `}>
        <h1 className={`text-black ${myfont.className} text-3xl sm:text-5xl text-center pt-6`}>Testimonial Spotlight</h1>
        <Carousel className="embla__container" plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]} >
          <CarouselContent className="  mt-8 p-4 mx-auto text-black ">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
              <div className="border-black border-2 min-h-[200px] max-h-fit sm:h-[300px] embla__slide">
                <p className="talic text-center  text-sm text-bold   sm:text-xl  mt-2 px-8 mb-4">
                  Advance level machines are available in this gym, Staff and gym trainers are too good,
                  polite, and knowledgeable. I am satisfied with their training services
                </p>
                <h2 className="text-4xl font-extrabold p-8 text-cyan-900 sm:text-4xl text-bold text-end">Pankaj Kumar</h2>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
              <div className="border-black border-2 min-h-[200px] max-h-fit sm:h-[300px] embla__slide">
                <p className="talic text-center  text-sm text-bold   sm:text-xl  mt-2 px-8 mb-4">
                  The trainers are genuinely helpful and the crowd is one of the best i have seen in any of the chains.
                  Very decent atmosphere. The music is just right too
                </p>
                <h2 className="text-4xl font-extrabold p-8 text-cyan-900 sm:text-4xl text-bold text-end">Akash Sharma</h2>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
              <div className="border-black border-2 min-h-[200px] max-h-fit sm:h-[300px] embla__slide">
                <p className="text-ellipsis overflow-hidden talic text-center  text-sm text-bold   sm:text-xl  mt-2 px-8 mb-4">
                  Well I have been a monthly member now getting to get along with the people there.
                  It&apos;s a Great place for fitness freaks. There is passion in the Gym Fitness Instructors and
                  they work towards getting you towards Fitness.
                </p>
                <h2 className="text-4xl font-extrabold p-8 text-cyan-900 sm:text-4xl text-bold text-end">Priya Mehta</h2>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
              <div className="border-black border-2 min-h-[200px] max-h-fit sm:h-[300px] embla__slide">
                <p className="talic text-center  text-sm text-bold   sm:text-xl  mt-2 px-8 mb-4">
                  I recently joined the gym and I have a been liking it so far. Trainers are good, they guide u well, the ambiance is motivating.
                  It’s a top gym overall. If you are looking for top quality gym near Lajpat, east of kailash etc. I think you can definitely go
                  for it.
                </p>
                <h2 className="text-4xl font-extrabold p-2 sm:p-8 text-cyan-900 sm:text-4xl text-bold text-end">Aman Mehta</h2>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
