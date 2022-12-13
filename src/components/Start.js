import React from "react";
import Typed from "react-typed";

function Start() {
  return (
    <div className="text-center w-full h-[80vh] bg-black flex flex-col">
      <div className="m-auto">
        <h1 className="font-bold text-7xl text-white">Hello, </h1>
        <div className="flex sm:flex-row flex-col">
          <h1 className="font-bold text-7xl text-white sm:mr-3 ">
            My name is{" "}
          </h1>
          <Typed
            className="font-bold text-7xl text-white"
            strings={["Pasit"]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>
        <p className="text-slate-600 mt-3 text-xl">
          software engineer at KMUTNB
        </p>
      </div>
    </div>
  );
}

export default Start;
