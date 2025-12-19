import React from "react";

const Accessory = () => {
  return (
    <div className="w-full bg-white my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="text-center bg-[#f8f8f8] p-8">
          <h1 className="text-5xl font-extrabold text-black leading-tight">
            Accessories
          </h1>
          <p className="text-xl font-semibold text-black mt-4">
            Better than new, it’s different.
          </p>
        </div>

        <div className="text-center bg-[#f8f8f8] p-8">
          <h1 className="text-5xl font-extrabold text-black leading-tight">
            Join it
          </h1>
          <p className="text-xl font-semibold text-black mt-4">
            Welcome on board.
          </p>
          <img
            src="/join.png" // Replace with your image path
            alt="Flag"
            className="mx-auto mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Accessory;
