import React from "react";

function Skills() {
  return (
    <div className="flex flex-col bg-slate-600 w-full h-full py-20 m-auto text-center justify-center item-center">
      <h1 className="text-7xl font-extrabold text-white">Skills</h1>
      <div className="flex lg:flex-row flex-col justify-center m-auto">
        <div className="flex flex-col mt-20 m-5 justify-center items-center">
          <h1 className="text-white text-2xl font-bold mb-5">Tools</h1>
          <img src="https://skillicons.dev/icons?i=git,github,docker,aws,heroku,githubactions" />
        </div>
        <div className="flex flex-col mt-20 m-5 justify-center items-center">
          <h1 className="text-white text-2xl font-bold mb-5">Language</h1>
          <img src="https://skillicons.dev/icons?i=go,js,nodejs,python,rust,bash" />
        </div>
        <div className="flex flex-col mt-20 m-5 justify-center items-center">
          <h1 className="text-white text-2xl font-bold mb-5">Database</h1>
          <img src="https://skillicons.dev/icons?i=mongodb,postgres,mysql,redis,sqlite" />
        </div>
        <div className="flex flex-col mt-20 m-5 justify-center items-center">
          <h1 className="text-white text-2xl font-bold mb-5">Technology</h1>
          <img src="https://skillicons.dev/icons?i=react,qt,bootstrap,express,firebase,flask,nextjs,tailwind,fastapi" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
