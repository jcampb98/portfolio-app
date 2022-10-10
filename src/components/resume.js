import { DocumentDownloadIcon } from "@heroicons/react/solid";
import React from "react";

export default function Resume(){
    //Function will execute on click of a button
    const onButtonClick = () => {
        //using javascript method to get PDF file
        fetch('Joshua_Campbell_CV.pdf').then(response => {
            response.blob().then(blob => {
                //Creating a new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                //setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Joshua_Campbell_CV.pdf';
                alink.click();
            })
        })
    }
    
    return(
        <section id="resume">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="text-center mb-10">
                    <DocumentDownloadIcon className="w-10 inline-block mb-4"/>
                    <h1 className="sm:text-4xl text-3x1 font-medium title-font text-white mb-4">
                        My CV
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        This is my CV which outlines my education, technical skills, what i can offer, and so much more.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4 justify-center items-center gap-10">
                    <button onClick={onButtonClick} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Download CV
                    </button>
                </div>
            </div>
        </section>
    );
}