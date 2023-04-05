import { BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";

export default function Experiance(){
    return(
        <section id="experience" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Previous Experience
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    This is a list of Previous Job Experience that i have gained
                </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div class="grid grid-cols-1 md:grid-cols-6 my-10">
                        <div class="flex flex-col col-span-2 mb-4 md:mb-0">
                            <h5 class="text-xl md:text-2xl font-bold">Software Development Intern</h5>
                            <h6 class="text-lg font-bold">KMsoft</h6>
                            <p>Nov 2022 - Apr 2023</p>
                        </div>
                        <div class="flex flex-col col-span-4">
                            <p>My duties as a Software Development Intern consisted of continuously Developing and Updating StockAssist to patch any bugs/errors
                                and develop any new features for the Web and Mobile Application for clients. I was also responsible
                                for Testing the Web and Mobile Application was error/bug free before any new updates were rolled out to the clients. I
                                was also put in charge of my own small project for KMsoft to build a Desktop Application for a client which needed new software to streamline their manufacturing process and barcode scanning to make it
                                faster to scan materials.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}