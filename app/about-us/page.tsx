"use client";

import Image from "next/image";


const About = () => {

    return (
        <div className="   text-black
        rounded-lg 
        h-fit 
        w-full 
        overflow-hidden  sm:mt-[300px]
        overflow-y-auto">
            <h1 className="text-xl bg-green-800 text-white p-4  flex justify-center sm:text-5xl">Fitness Routine Which Suit You Personal Needs and Target </h1>
            <div className="container ml-auto py-6 h-fit  ">
                <div className="sm:grid sm:grid-cols-2 gap-4 justify-center items-center  mt-10 mb-10 sm:mx-8  w-full text-xl  ">
                    <div className=" mx-4  font-bold flex flex-col items-center">
                        <h1 className={`p-2  text-center sm:text-5xl`}>Mission </h1>
                        <p className=" p-8 mx-4 text-center italic font-light mt-5 tracking-wide mb-10 ">Core Fit Gym is enriching lives through better health, optimum fitness, convenience, community, and inspiration-driven franchise ownership. We aim to provide a space for every individual to pursue their fitness goals.</p>
                    </div>
                    <div className=" mx-4  font-bold flex flex-col items-center">
                        <h1 className={`p-2  text-center sm:text-5xl`}>Goal</h1>
                        <p className="p-8 mx-4 text-center italic font-light  mt-5 tracking-wide mb-10 ">By working towards fitness and health, we parallelly focus on increasing our presence. Our goal is to enhance the growth of every individual gym member.</p>
                    </div>
                    <div className=" mx-4 font-bold flex flex-col items-center">
                        <h1 className={`p-2  text-center sm:text-5xl`}>Who Are We? </h1>
                        <p className="p-8 mx-4 text-center italic font-light  mt-5 tracking-wide mb-10 ">Core Fitness believes in a strong corporate culture- PEOPLE, PURPOSE, PROFITS, and PLAY. People: A business that puts people first, always.</p>
                    </div>
                    <div className=" mx-4 font-bold flex flex-col items-center">
                        <h1 className={`p-2  text-center sm:text-5xl`}>Community </h1>
                        <p className="p-8 mx-4 text-center italic font-light  mt-5 tracking-wide mb-10 ">Gain confidence for your fitness journey with
                            our personalized fitness consultation. Our expert trainers will assess and evaluate your current fitness level and suggest a customized plan</p>
                    </div>
                </div>

            </div>

            <div className="bg-[url('/images/bg_temp.png')]  mt-6 pt-8 pb-8 ">
                <h1 className="text-xl text-cyan-800 mt-6 flex justify-center sm:text-5xl">I want to sign up for a membership</h1>
                <p className="text-sm mb-4 text-blue text-opacity-10 mt-4 flex justify-center sm:text-xl"> Contact Us for more information about our membership options. We look forward to hearing from you!</p>
            </div>
        </div>
    );
};

export default About;