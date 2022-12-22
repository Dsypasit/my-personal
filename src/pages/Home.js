import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import ProjectDisplay from "../components/ProjectDisplay";
import Skills from "../components/Skills";
import Start from "../components/Start";

function Home() {
  return (
    <div>
      <Start />
      <About />
      <Experience />
      <ProjectDisplay />
      <Skills />
    </div>
  );
}

export default Home;
