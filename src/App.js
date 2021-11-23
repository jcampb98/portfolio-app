import React from "react";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import Navbar from "./components/navbar.js";
import Projects from "./components/projects.js";
import Skills from "./components/skills.js";

export default function App() {
  return (
    <main>
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  )
}
