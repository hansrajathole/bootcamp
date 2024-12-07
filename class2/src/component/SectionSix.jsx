import React from "react";
import card1 from "../assets/card-1.jpg";
import card2 from "../assets/card-2.jpg";
import card3 from "../assets/card-3.jpg";
import card4 from "../assets/card-4.jpg";

const SectionSix = () => {
  return (
    <div className="px-12 bg-white pt-20 pb-10">
      <div className="top flex justify-between">
        <div className="right flex flex-col gap-5">
          <p className="font-medium">Services</p>
          <h1 className="font-semibold text-3xl">
            Zo onderscheiden we je van de norm
          </h1>
        </div>
        <div className="left flex items-end">
          <button className="text-white bg-black p-3 rounded-[1em] hover:rounded-[2em] ease-linear duration-300 font-bold">
            Lees meer <i class="ri-arrow-right-line ml-3"></i>
          </button>
        </div>
      </div>
      <div className="middle mt-9 flex gap-4">
        <div className="group card h-[500px] w-[25%]">
          <div className="group top h-[60%]  overflow-hidden">
            <img
              src={card1}
              alt=""
              className="object-cover rounded-tl-[2em] group-hover:rounded-[5em]  ease-in duration-200 rounded-tr-[2em] h-[100%] w-[100%]"
            />
          </div>
          <div className="group group-hover:rounded-[5em] ease-in duration-200 bottom h-[40%] p-8 flex flex-col justify-between bg-[#AA81B7] rounded-bl-[2em] rounded-br-[2em]  text-white">
            <div className="flex justify-between">
              <button className="text-2xl font-semibold">Brand Story</button>
              <i class="ri-arrow-right-line ml-3"></i>
            </div>
            <p>
              Ondersteuning op het gebied van design, social media en content
              creatie.
            </p>
          </div>
        </div>
        <div className="group card h-[500px] w-[25%]">
          <div className="group top h-[60%]  overflow-hidden">
            <img
              src={card2}
              alt=""
              className="group-hover:rounded-[5em] ease-in duration-200 object-cover rounded-tl-[2em] rounded-tr-[2em] h-[100%] w-[100%]"
            />
          </div>
          <div className="group group-hover:rounded-[5em] ease-in duration-200 bottom h-[40%] p-8 flex flex-col justify-between bg-[#10100F] rounded-bl-[2em] rounded-br-[2em]  text-white">
            <div className="flex justify-between">
              <button className="text-2xl font-semibold">Brand Story</button>
              <i class="ri-arrow-right-line ml-3"></i>
            </div>
            <p>
              Ondersteuning op het gebied van design, social media en content
              creatie.
            </p>
          </div>
        </div>
        <div className="group card h-[500px] w-[25%]">
          <div className="group top h-[60%]  overflow-hidden">
            <img
              src={card3}
              alt=""
              className="group-hover:rounded-[5em] ease-in duration-200 object-cover rounded-tl-[2em] rounded-tr-[2em] h-[100%] w-[100%]"
            />
          </div>
          <div className="group group-hover:rounded-[5em] ease-in duration-200 bottom h-[40%] p-8 flex flex-col justify-between bg-[#36A96A] rounded-bl-[2em] rounded-br-[2em]  text-white">
            <div className="flex justify-between">
              <button className="text-2xl font-semibold">Brand Story</button>
              <i class="ri-arrow-right-line ml-3"></i>
            </div>
            <p>
              Ondersteuning op het gebied van design, social media en content
              creatie.
            </p>
          </div>
        </div>
        <div className="group card h-[500px] w-[25%]">
          <div className="group top h-[60%]  overflow-hidden">
            <img
              src={card4}
              alt=""
              className="group-hover:rounded-[5em] ease-in duration-200 object-cover rounded-tl-[2em] rounded-tr-[2em] h-[100%] w-[100%]"
            />
          </div>
          <div className="group group-hover:rounded-[5em] ease-in duration-200 bottom h-[40%]  p-8 flex flex-col justify-between bg-[#FA8A58] rounded-bl-[2em] rounded-br-[2em]  text-white">
            <div className="flex justify-between">
              <button className="text-2xl font-semibold">Brand Story</button>
              <i class="ri-arrow-right-line ml-3"></i>
            </div>
            <p>
              Ondersteuning op het gebied van design, social media en content
              creatie.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom pt-14">
        <p className="text-2xl">
          NiceAtNoon is fris, jong en een tikkeltje eigenzinnig. Wars van jargon
          en allergisch voor bureau blabla, gaan we lekker samen aan de slag met
          jouw merk. En dat moet vooral leuk zijn! Want plezier nemen we
          serieus. Vanuit daar ontstaat enthousiasme, trots en het
          zelfvertrouwen om jouw merk de uitstraling te geven die het verdient.
        </p>
        <button className="mt-5 bg-black text-white rounded-[1em] font-semibold p-3 px-5 hover:rounded-[2em] ease-linear duration-300 ">Contact <i class="ri-arrow-right-line ml-3"></i></button>
      </div>
    </div>
  );
};

export default SectionSix;
