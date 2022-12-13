import React from "react";
import Profile from "../assets/profile.jpg";

function About() {
  return (
    <div className="w-full h-[800px] bg-gray-900 text-center">
      <h1 className="text-white text-7xl font-extrabold pt-5">About me</h1>
      <div className="flex md:flex-row flex-col justify-center  my-10 md:mx-[200px] items-center">
        <div className="flex flex-1 items-center justify-center">
          <img
            src={Profile}
            className="w-auto xl:h-[600px] md:h-[400px] h-[300px] rounded-lg"
            alt=""
          />
        </div>
        <p className="flex-1 text-white text-left text-xl md:ml-10 md:mt-0 mt-10">
          Hi, My name is Pasit Sri-intarasut. I'm studying software engineer at
          KMUTNB. I'm interested in{" "}
          <span className="font-bold">
            backend technology, microservice and devops!
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
