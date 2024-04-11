"use client";
import bgImage from "../../public/images/bg.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import membership1 from "../../public/images/member0.webp";
import membership2 from "../../public/images/member1.webp";
import membership3 from "../../public/images/member2.webp";
import membership4 from "../../public/images/member4.webp";

import training1 from "../../public/images/01.jpg";
import training2 from "../../public/images/training-2.jpg";
import training3 from "../../public/images/training-3.jpg";
import training4 from "../../public/images/04.jpg";


import Image from "next/image";
import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";

const membership = () => {

  const router = useRouter();

  return (
    <div className="  bg-black text-white
        rounded-lg 
        h-fit 
        w-full 
        overflow-hidden 
        overflow-y-auto">
      <div className="relative bg-blue-100 rounded-lg h-full w-full">
        <Image src={bgImage} alt="" className="h-[80%] w-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-md sm:text-6xl font-bold text-center text-white">Why Join Core Fit Gym Membership?</h1>
          <p className="text-sm sm:text-xl text-center mt-8 text-white sm:w-[50%] mx-auto">Begin your fitness adventure with a lively gym pass at Core Fitness! Enter a realm where a friendly,
            inclusive community flourishes, bringing together individuals of every fitness level. This is
            beyond just a gym - it&apos;s your inspiring fitness sanctuary!</p>
        </div>
      </div>
      <div className=" mx-4 mt-8 pt-8 ">
        <Carousel>
          <CarouselContent className=" w-[70%]">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 "><Image src={training1} alt="corosal image" className="h-[30vh] w-[40vh]" /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 "><Image src={training2} alt="corosal image" className="h-[30vh] w-[40vh]" /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 "><Image src={training3} alt="corosal image" className="h-[30vh] w-[40vh]" /></CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 "><Image src={training4} alt="corosal image" className="h-[30vh] w-[40vh]" /></CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      {/* // 50% on small screens and 33% on larger screens. */}
      <div className="flex flex-col justify-center mt-6 pt-6">
        <button onClick={()=>router.push('/inquiry')} className="text-md sm:text-6xl mx-auto mt-4 border-2 w-fit border-lime-300 hover:bg-slate-500 hover:text-white font-bold py-2 px-4 rounded-full">Member Inquiry</button>
        <h2 className="text-3xl font-bold text-center mt-6 pt-6">WHY CHOOSE Core FITNESS GYM MEMBERSHIP</h2>
      </div>
      <div className="sm:grid sm:grid-cols-2 gap-4 justify-center items-center pt-4  mt-10 mb-10 sm:mx-8  w-full  text-white">
        <div className=" mx-4  font-bold flex flex-col items-center">
          <Image src={membership1} className="h-fit w-fit " alt="image" />
          <h1 className="p-2  text-center sm:text-2xl">SUPPORT </h1>
          <p className=" p-12 mx-4 text-xl text-center  font-light mt-5 tracking-wide mb-10 ">Gain confidence for your fitness journey with
            our personalized fitness consultation. Our expert trainers will assess and evaluate your current fitness level and suggest a customized plan</p>
        </div>
        <div className=" mx-4  font-bold flex flex-col items-center">
          <Image src={membership2} className="h-fit w-fit " alt="image" />
          <h1 className="p-2 text-center sm:text-2xl">Tools & Training</h1>
          <p className="p-12 mx-4 text-xl text-center  font-light  mt-5 tracking-wide mb-10 ">Gain confidence for your fitness journey with
            our personalized fitness consultation. Our expert trainers will assess and evaluate your current fitness level and suggest a customized plan</p>
        </div>
        <div className=" mx-4 font-bold flex flex-col items-center">
          <Image src={membership3} className="h-fit w-fit " alt="image" />
          <h1 className="p-2 text-center sm:text-2xl">Convenience </h1>
          <p className="p-12 mx-4 text-xl text-center  font-light  mt-5 tracking-wide mb-10 ">Gain confidence for your fitness journey with
            our personalized fitness consultation. Our expert trainers will assess and evaluate your current fitness level and suggest a customized plan</p>
        </div>
        <div className=" mx-4 font-bold flex flex-col items-center">
          <Image src={membership4} className="h-fit w-fit " alt="image" />
          <h1 className="p-2 text-center sm:text-2xl">Community </h1>
          <p className="p-12 mx-4 text-xl text-center  font-light  mt-5 tracking-wide mb-10 ">Gain confidence for your fitness journey with
            our personalized fitness consultation. Our expert trainers will assess and evaluate your current fitness level and suggest a customized plan</p>
        </div>
      </div>
      <Image src={training4} alt="image" className="h-[80%] w-[80%] mx-auto mt-10 " />
      <div className="flex flex-col justify-center mt-6">
        <hr className="mb-4 mx-auto w-[50%] pt-4 border-black" />
        <h2 className="text-4xl sm:text-6xl font-bold text-center mt-6">Core Fitness Gym Membership Offers</h2>
      </div>
      <div className="sm:flex sm:justify-between  sm:flex-grow  mt-10 pt-4 mx-auto sm:w-[60%] w-full  text-black">
        <div className=" mx-4  font-bold text-center sm:text-start">
          <h1 className="p-2 text-3xl text-white text-center  sm:text-4xl">Equipment </h1>
          <p className="  text-xl mt-2  p-2 text-gray-700">Treadmills</p>
          <p className="  text-xl  p-2 text-gray-700">Exercise Cycles</p>
          <p className=" text-xl  p-2 text-gray-700">Stair Climbers</p>
          <p className="  text-xl  p-2 text-gray-700">Rowing Machines</p>
          <p className="  text-xl  p-2 text-gray-700">Free Weights</p>
          <p className="  text-xl  p-2 text-gray-700">Synergy 360 Systems</p>
          <p className="  text-xl  p-2 text-gray-700">Cable Crossovers</p>
          <p className="  text-xl  p-2 text-gray-700">Dumbbells</p>
          <p className="  text-xl  p-2 text-gray-700">Kettlebells</p>
          <p className="  text-xl  p-2 text-gray-700">Foam Rollers</p>
          <p className="  text-xl  p-2 text-gray-700">Amt Crosstrainers</p>
        </div>
        <div className=" mx-4  font-bold text-center sm:text-start">
        <h1 className="p-2 text-3xl text-white text-center  sm:text-4xl">Lifestyle </h1>
          {/* <h1 className="p-2 text-4xl text-white text-center sm:text-5xl">Lifestyle </h1> */}
          <p className="  text-xl  mt-2 p-2 text-gray-700">Personal Training</p>
          <p className="  text-xl  p-2 text-gray-700">Team Workouts</p>
          <p className="  text-xl  p-2 text-gray-700">Tanning</p>
          <p className="  text-xl  p-2 text-gray-700">Adaptive Motion Trainers</p>
          <p className="  text-xl  p-2 text-gray-700">Spinning Cycles & Classes</p>
          <p className="  text-xl  p-2 text-gray-700">Zumba Classes</p>
          <p className="  text-xl  p-2 text-gray-700">Cardio Classes</p>
          <p className="  text-xl  p-2 text-gray-700">Body Conditioning Classes</p>
          <p className="  text-xl  p-2 text-gray-700">Yoga Classes</p>
        </div>
        <div className=" mx-4 font-bold text-center sm:text-start">
          <h1 className="p-2 text-3xl text-white text-center sm:text-4xl">Services </h1>
          <p className="  text-xl mt-2  p-2 text-gray-700">24-Hour Access</p>
          <p className="  text-xl  p-2 text-gray-700">24-Hour Security</p>
          <p className="  text-xl  p-2 text-gray-700">Convenient Parking</p>
          <p className="  text-xl  p-2 text-gray-700">Anywhere Gym Access</p>
          <p className="  text-xl  p-2 text-gray-700">Private Restrooms</p>
          <p className="  text-xl  p-2 text-gray-700">Private Showers</p>
          <p className="  text-xl  p-2 text-gray-700">Wellness Programs</p>
          <p className="  text-xl  p-2 text-gray-700">Cardio Tvs</p>
          <p className="  text-xl  p-2 text-gray-700">TVs And HDTVs</p>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-6 mb-6">
      <button onClick={()=>router.push('/inquiry')} className="text-md sm:text-6xl mx-auto mt-4 border-2 w-fit border-lime-300 hover:bg-slate-500 hover:text-white font-bold py-2 px-4 rounded-full">Member Inquiry</button>
      </div>
    </div>
  );
};

export default membership;