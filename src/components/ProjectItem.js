import React from "react";

function ProjectItem({ image, name, id }) {
  return (
    <div className="cursor-pointer text-center m-10 rounded-lg hover:drop-shadow-xl drop-shadow-md transition duration-200 ease-in-out bg-white ">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-cover bg-no-repeat w-full bg-center rounded-t-xl h-[200px]"
      />
      <h1 className="text-black font-semibold m-10">{name}</h1>
    </div>
  );
}

export default ProjectItem;
