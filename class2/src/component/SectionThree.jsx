import React from "react";

const SectionThree = () => {
  return (
    <div className="mt-14 w-full px-12">
      <div className="flex flex-col justify-center items-center relative">
        <p>Cases</p>
        <h1 className="text-9xl font-bold uppercase mt-16">Head Turning</h1>
        <h1 className="text-9xl font-bold uppercase"> Projects </h1>
        <button className="bg-yellow-300 p-4 font-semibold text-xl rounded-[1.2em] absolute left-[60%] top-[93%] rotate-[-10deg] ">Gotta see'm all</button>
      </div>
      <div className=" w-full flex justify-end mt-5">
        <button className="px-5  py-4 font-semibold border-[1px] border-black rounded-[1em] hover:rounded-[2em] ease-linear duration-300 ">Alle projecten <i class="ri-arrow-right-line ml-3"></i></button>
      </div>
    </div>
  );
};

export default SectionThree;
