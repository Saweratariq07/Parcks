import React from "react";

const Capsule = () => {
  return (
    <div className=" justify-center items-center bg-[#f8f8f8] px-4">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-black leading-tight">
          Capsule<span className="text-gray-500 pb-4">s</span>
        </h1>
         <h1 className="text-7xl text-center font-extrabold text-black mb-16">
       A private privacy.
      </h1>
        <a
          href="#"
          className="text-blue-500 font-semibold mt-4 inline-block"
        >
          Learn more &gt;
        </a>
      </div>
      <div className="  w-full text-center">
        <img
          src="/capsule.png"
          alt="Capsule"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Capsule;
