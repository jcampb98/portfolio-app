import { GlobeAltIcon } from "@heroicons/react/solid";
import { SocialIcon } from 'react-social-icons';
import React from "react";

export default function Social(){
    return(
        <section id="social-media">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="text-center mb-10">
                    <GlobeAltIcon className="w-10 inline-block mb-4"/>
                    <h1 className="sm:text-4xl text-3x1 font-medium title-font text-white mb-4">
                        Social Media Links
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Wanna Discuss, Lets Connect
                    </p>
                </div>
                <div className="flex flex-wrap -m-4 justify-center items-center gap-10">
                    <SocialIcon url="https://www.linkedin.com/in/joshua-campbell98/" network="linkedin" fgColor="white" style={{ height: 80, width: 80, gap: "20px"}} />
                    <SocialIcon url="https://github.com/jcampb98" network="github" fgColor="white" style={{ height: 80, width: 80, gap: "20px"}} />
                </div>
            </div>
        </section>
    );
}