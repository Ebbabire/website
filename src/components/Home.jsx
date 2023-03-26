import React from 'react';
import hero from '../assets/hero_image.png';
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { IoLogoReact } from 'react-icons/io5';
import { SiTailwindcss, SiRedux } from 'react-icons/si';

const Home = () => {
  return (
    <div className="mt-14 flex flex-col justify-center items-center lg:flex-row h-screen ">
      {/* right side */}
      <div className="basis-[45%] lg:order-2 flex justify-center items-end lg:h-full lg:bg-slate-300">
        <div className="relative  w-2/3 pt-12 lg:w-full lg:pt-20">
          <img src={hero} alt="photo" />

          <div className="absolute lg:top-0 lg:left-14 bg-white shadow-lg rounded-full p-3">
            <IoLogoJavascript className="text-4xl" />
          </div>
          <div className="absolute lg:top-5 lg:left-52 bg-white shadow-lg rounded-full p-3">
            <IoLogoReact className="text-4xl" />
          </div>
          <div className="absolute lg:top-28 lg:left-72 bg-white shadow-lg rounded-full p-3">
            <SiTailwindcss className="text-4xl" />
          </div>
        </div>
      </div>
      {/* left side */}
      <div className="basis-[65%]">name</div>
    </div>
  );
};

export default Home;
