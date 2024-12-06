import React from "react";
import img1 from "../Assets/lukas-car-parts.png";
import img2 from '../Assets/project-2.png'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Works = () => {
  return (
    <section id="Projects">
      <div className="container">
        <h1 className="text-white text-5xl text-center">Projects</h1>
        <div className="w-[150px] h-[3px] mx-auto my-3 bg-[#FF014F]"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-[40px] gap-4">
          <div className="w-full lg:max-w-md rounded-3xl mx-auto p-6 space-y-4 text-white/75  bg-gradient-to-t from-gray-1000 via-gray-800 to-transparent shadow-[0px_5px_24px_0px_rgba(253,253,253,0.2)]">
            <div className=" relative overflow-hidden rounded-2xl group">
              <div className="w-full bg-[#212428ab] absolute top-0 h-[100%] flex items-center justify-center opacity-0 group-hover:opacity-100 duration-200">
                <div className="h-12 w-12 rounded-full bg-[#ff014dbd] flex items-center justify-center cursor-pointer">
                  <a
                    href="https://github.com/Dhruv-1395/lukas-car-parts"
                    target="0"
                  >
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </div>
              <img
                src={img1}
                alt="project"
                width={800}
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-zinc-100">
                Lukas Car Parts
              </h2>
              <p className="text-xl text-zinc-400">The E-commerce Website...</p>
            </div>
          </div>

          <div className="w-full lg:max-w-md  rounded-3xl mx-auto  p-6 space-y-4 text-white/75  bg-gradient-to-t from-gray-1000 via-gray-800 to-transparent shadow-[0px_5px_24px_0px_rgba(253,253,253,0.2)]">
            <div className=" relative overflow-hidden rounded-2xl group">
              <div className="w-full bg-[#212428ab] absolute top-0 h-[100%] flex items-center justify-center opacity-0 group-hover:opacity-100 duration-200">
                <div className="h-12 w-12 rounded-full bg-[#ff014dbd] flex items-center justify-center cursor-pointer">
                  <a
                    href="https://github.com/Dhruv-1395/manba-finaserve"
                    target="0"
                  >
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </div>
              <img
                src={img2}
                alt="Project"
                width={800}
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-zinc-100">
                Manba-Finaserve
              </h2>
              <p className="text-xl text-zinc-400">The Finance Website...</p>
            </div>
          </div>
        </div>
        <hr className='bg-white' />
      </div>
    </section>
  );
};

export default Works;
