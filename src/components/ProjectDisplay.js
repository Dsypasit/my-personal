import React from "react";
import { ProjectList } from "../helpers/ProjectList";
import ProjectItem from "./ProjectItem";

function ProjectDisplay() {
  return (
    <div className="flex flex-col py-20 justify-center w-full h-full bg-white text-center">
      <h1 className="text-black text-7xl mb-10 font-extrabold">Project</h1>
      <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center items-center">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectDisplay;
