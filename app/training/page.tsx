"use client";
import Image from "next/image";
import training1 from "../../public/images/01.jpg";
import training2 from "../../public/images/training-2.jpg";
import training3 from "../../public/images/training-3.jpg";
import training4 from "../../public/images/04.jpg";

const Training  = () => {
    
    return (
        <div className="  bg-black text-white
        rounded-lg 
        pt-6
        h-fit 
        w-full 
        overflow-hidden  sm:mt-[110px]
        overflow-y-auto">
          <div className="container ml-auto py-6 h-fit  ">
            <div className=" font-bold ">
              <h1 className="text-xl flex justify-center sm:text-5xl">Customized Workout Plans for Every Individual </h1>
              <p className="w-[90%] text-xl pt-4 font-light text-white  mx-auto mt-5 tracking-wide mb-10 sm:w-[60%]">From novices to fitness fans, our skilled trainers guide both groups and
               individuals with tailored, efficient exercises. These routines are crafted with practical wisdom to aid your fitness journey
                and foster community</p>
                <a className=" border-4 border-cyan-400 text-md sm:text-xl  mt-14  text-white p-4 rounded-xl mx-auto sm:ml-[40%] mb-10" href="https://www.google.com/maps/place/CORE-FIT+GYM/@26.936183,75.7893125,16z/data=!4m6!3m5!1s0x396db3ff94b2f981:0x727d3c433525aacf!8m2!3d26.9364126!4d75.7966182!16s%2Fg%2F11v613rlsj?entry=ttu" target="_blank">Find your gym now to learn more</a>
                <div className="sm:flex sm:flex-grow  mt-10  w-full  text-white">
                    <div className="bg-cyan-800  rounded-2xl  mx-4  font-bold ">
                      <Image src={training1} className="h-fit w-fit " alt="image"/>
                      <h1 className="p-2  text-center sm:text-2xl">FITNESS CONSULTATION </h1>
                      <p className=" p-2 text-center italic font-light mt-5 tracking-wide mb-10 ">Gain confidence for your fitness journey with
                       our personalized fitness consultation. Our expert trainers will assess and evaluate your current fitness level and suggest a customized plan</p>
                    </div>
                    <div className="bg-cyan-800 rounded-2xl mx-4  font-bold ">
                      <Image src={training2} className="h-fit w-fit " alt="image"/>
                      <h1 className="p-2 text-center sm:text-2xl">GROUP FITNESS </h1>
                      <p className="p-2 text-center italic font-light  mt-5 tracking-wide mb-10 ">Gain confidence for your fitness journey with
                       our personalized fitness consultation. Our expert trainers will assess and evaluate your current fitness level and suggest a customized plan</p>
                    </div>
                    <div className="bg-cyan-800 rounded-2xl mx-4 font-bold ">
                      <Image src={training3} className="h-fit w-fit " alt="image"/>
                      <h1 className="p-2 text-center sm:text-2xl">PERSONALIZED TRAINING </h1>
                      <p className="p-2 text-center italic font-light  mt-5 tracking-wide mb-10 ">Gain confidence for your fitness journey with
                       our personalized fitness consultation. Our expert trainers will assess and evaluate your current fitness level and suggest a customized plan</p>
                    </div>
                </div>
                <Image src={training4} alt="image" className="h-[80%] w-[80%] mx-auto mt-10 " />
                
            </div>
           
          </div>
          
          
        </div>
      );
};

export default Training;