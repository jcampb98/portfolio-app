import React from "react";

export default function About()
{
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Joshua.
                        <br className="hidden lg:inline-block" />I develop Web/Mobile Applications
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        As a seasoned Junior Software Developer and proud graduate of Glasgow Caledonian University, 
                        I hold an Upper Second Class Honours degree in Computing, 
                        reflecting my dedication and expertise in the field. With a wealth of experience in crafting dynamic websites and mobile applications, 
                        I thrive on leveraging diverse software and cutting-edge technologies to bring innovative digital solutions to life. From conceptualization to execution, 
                        I am committed to delivering robust and user-centric software experiences that exceed expectations.
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
                    <img className="object-cover object-center rounded-full" src="./profile-pic.svg" alt="image of Joshua Campbell looking outwards" />
                </div>
            </div>
        </section>
    );
}