"use client"
import React, { useState } from 'react';

const Inquiry: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phoneNumber: '',
        about: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const constructWhatsAppLink = () => {
        const { firstName, email, phoneNumber, about } = formData;
        const message = `Name: ${firstName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nAbout: ${about}`;
        return `https://wa.me/919352182294?text=${encodeURIComponent(message)}`;
    };
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const whatsappURL = constructWhatsAppLink();
        window.location.href = whatsappURL;
    };

    return (
        <div className="bg-blue-100 rounded-lg h-fit w-full overflow-hidden sm:mt-[150px] bg-[url('/images/bg_info.jpeg')] bg-cover bg-center text-white overflow-y-auto">
            <div className="container ml-auto py-6 h-fit">
                <div className="font-bold">
                    <h1 className="text-xl mt-4 flex justify-center sm:text-3xl">Send Us Your Feedback</h1>
                    <p className="text-sm mb-4 text-blue text-opacity-10 mt-4 flex justify-center sm:text-md sm:w-[70%] sm:pl-[30%]">
                        Your gym experience is of the utmost importance to us. Was something a little off last time you stopped in for a workout? Feel like sharing a
                        little victory or a major milestone? Please let us know by completing the form below.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col items-center justify-center mt-10">
                            <div>
                                <label htmlFor="first-name" className="block text-3xl font-medium leading-6">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="first-name"
                                    autoComplete="given-name"
                                    onChange={handleChange}
                                    className="rounded-md border-white border-b pl-10 py-2 mx-6 bg-transparent w-[40vh] sm:w-[50vh] text-white shadow-sm bg-none sm:text-sm sm:leading-6"
                                />
                            </div>
                            {/* Add similar input fields for email, phone number, and about */}
                            <div className="mt-8">
                                <label htmlFor="email" className="block text-3xl font-medium leading-6 ">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        onChange={handleChange}
                                        placeholder="youremail@gmail.com"
                                        className=" rounded-md border-white border-b pl-10 py-2 mx-6 w-[40vh] sm:w-[50vh] bg-transparent  text-white shadow-sm bg-none  placeholder:text-gray-400  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="mt-8">
                                <label htmlFor="number" className="block text-3xl font-medium leading-6 ">
                                    Phone Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="number"
                                        name="phoneNumber"
                                        type="tel"
                                        autoComplete="number"
                                        onChange={handleChange}
                                        className=" rounded-md border-white border-b pl-10 py-2 mx-6 w-[40vh] sm:w-[50vh] bg-transparent  text-white shadow-sm bg-none  placeholder:text-gray-400  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="mt-8">
                                <label htmlFor="about" className="block text-3xl font-medium leading-6 ">
                                    About
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className=" rounded-md border-white border-b pl-10 py-2 mx-6  w-[40vh]  sm:w-[50vh] bg-transparent  text-white shadow-sm bg-none  placeholder:text-gray-400  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                            Save
                        </button>
                    </form>
                </div>
            </div>
            <div className="bg-[url('/images/bg_temp.png')] mt-6 pt-8 pb-8">
                <h1 className="text-xl text-cyan-800 mt-6 flex justify-center sm:text-5xl">I want to sign up for a membership</h1>
                <p className="text-sm mb-4 text-blue text-opacity-10 mt-4 flex justify-center sm:text-md">
                    Contact Us for more information about our membership options. We look forward to hearing from you!
                </p>
            </div>
        </div>
    );
};

export default Inquiry;
