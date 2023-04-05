import React from "react";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import Navbar from "./components/navbar.js";
import Projects from "./components/projects.js";
import Skills from "./components/skills.js";
import SocialMedia from "./components/social-media.js";
import Resume from "./components/resume.js";
import Experience from "./components/experiance.js";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-front">
      <Navbar/>
      <About/>
      <Projects/>
      <Experience/>
      <Skills/>
      <SocialMedia/>
      <Resume/>
      <Contact/>
    </main>
  );
}
