import React from "react";

export default function About(){
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Joshua.
                        <br className="hidden lg:inline-block" />I develop amazing websites/applications
                        apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a graduate of Glasgow Caledonian University that achieved an Upper Second Class Honours degree in Computing. 
                        I have a lot of experience in building websites/mobile applications by using various Software and Technologies.
                    </p>
                    <div className="flex justify center">
                        <a href="#contact" 
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contact Me
                        </a>
                        <a href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See my Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="hero image"
                        src="./profile-pic.svg"
                    />
                </div>
            </div>
        </section>
    );
}