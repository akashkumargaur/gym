"use client";
import Image from "next/image";
import training1 from "../../public/images/photo-8.png";
import training2 from "../../public/images/photo-9.png";
import training3 from "../../public/images/photo-6.jpg";
import training4 from "../../public/images/04.jpg";
import support from "../../public/images/support.png";

import { useRouter } from "next/navigation";

const Training = () => {
  const router = useRouter();

  return (
    <div className="  text-black
        rounded-lg 
        mt-2
        h-fit 
        w-full 
        overflow-hidden  sm:mt-[230px]
        overflow-y-auto">
      <div className="container pt-10  py-6 h-fit  ">
        <div className=" font-bold sm:mt-14 ">
          <h1 className="text-xl flex justify-center sm:text-5xl">Customized Workout Plans for Every Individual </h1>
          <p className="w-[90%] text-xl pt-4 font-light text-black  mx-auto mt-5 tracking-wide mb-10 sm:w-[60%]">From novices to fitness fans, our skilled trainers guide both groups and
            individuals with tailored, efficient exercises. These routines are crafted with practical wisdom to aid your fitness journey
            and foster community</p>

          <div className="sm:flex sm:flex-grow  mt-8   w-full  text-white">
            <div className="bg-cyan-800 hover:animate-slideIn rounded-2xl  mx-4  font-bold shadow-2xl shadow-black " >
              <Image src={training1} className="h-fit w-fit " alt="image" />
              <h1 className="p-2  text-center sm:text-2xl">FITNESS CONSULTATION </h1>
              <p className=" p-2  text-center italic font-light mt-5 tracking-wide mb-10 ">Feeling unsure where to begin? Our complimentary fitness consultation is your first step to a healthier, happier you. During this personalized session, we&apos;ll chat about your goals, any past injuries you may have, and your current fitness level. schedule your free consultation today!

              </p>
            </div>
            <div className="bg-cyan-800 rounded-2xl mx-4  font-bold shadow-2xl shadow-black">
              <Image src={training2} className="h-fit w-fit " alt="image" />
              <h1 className="p-2 text-center sm:text-2xl">GROUP FITNESS </h1>
              <p className="p-2 text-center italic font-light  mt-5 tracking-wide mb-10 ">Want to ditch the solo sweat session and experience the electrifying energy of group fitness? Our classes are designed to push you further, fueled by the power of community.
                From the infectious rhythms of Zumba to the heart-pumping intensity of cardio, there&apos;s a class to match your vibe and fitness level.
              </p>
            </div>
            <div className="bg-cyan-800 rounded-2xl mx-4 font-bold shadow-2xl shadow-black">
              <Image src={training3} className="h-fit w-fit " alt="image" />
              <h1 className="p-2 text-center sm:text-2xl">PERSONALIZED TRAINING </h1>
              <p className="p-2 text-center italic font-light  mt-5 tracking-wide mb-10 ">Personalized training isn&apos;t a one-size-fits-all
                approach. Whether you&apos;re a seasoned gym rat or just starting out, we understand your goals and limitations are unique.
                Our expert trainers will create a custom plan that considers any past injuries, your current fitness level, and what truly
                excites you. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center sm:mt-6 mb-6">
        <button className="text-md sm:text-4xl mx-auto  border-2 w-fit border-cyan-400 hover:bg-slate-500 hover:text-white font-bold py-2 px-4 rounded-full"><a href="https://www.google.com/maps/place/CORE-FIT+GYM/@26.936183,75.7893125,16z/data=!4m6!3m5!1s0x396db3ff94b2f981:0x727d3c433525aacf!8m2!3d26.9364126!4d75.7966182!16s%2Fg%2F11v613rlsj?entry=ttu" target="_blank"> FIND YOUR GYM NOW TO LEARN MORE</a></button>
      </div>
      <Image src={training4} alt="image" className="h-[80%] w-[80%] mx-auto my-10 " />


    </div>
  );
};

export default Training;