import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Works = () => {
  const Projects = [
    {
      link:"https://github.com/Dhruv-1395/lukas-car-parts",
      img:"lukas-car-parts.png",
      title:"Lukas Car Parts",
      dec:"The E-commerce Website..."
    },
    {
      link:"https://github.com/Dhruv-1395/manba-finaserve",
      img:"project-2.png",
      title:"Manba-Finaserve",
      dec:"The Finance Website..."
    },
    {
      link:"https://github.com/Dhruv-1395/Jwellery-shop",
      img:"project3.png",
      title:"Jwellery Shop",
      dec:"The E-commerce Website..."
    }
  ]
  return (
    <section id="Projects">
      <div className="container">
        <h1 className="text-white text-5xl text-center">Projects</h1>
        <div className="w-[150px] h-[3px] mx-auto my-3 bg-[#FF014F]"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-[40px] gap-4">
        {
          Projects.map((item,index)=>{
            return(
              <div key={index} className="w-full lg:max-w-md rounded-3xl mx-auto p-6 space-y-4 text-white/75  bg-gradient-to-t from-gray-1000 via-gray-800 to-transparent shadow-[0px_5px_24px_0px_rgba(253,253,253,0.2)]">
              <div className=" relative overflow-hidden rounded-2xl group">
                <div className="w-full bg-[#212428ab] absolute top-0 h-[100%] flex items-center justify-center opacity-0 group-hover:opacity-100 duration-200">
                  <div className="h-12 w-12 rounded-full bg-[#ff014dbd] flex items-center justify-center cursor-pointer">
                    <a
                      href={item.link}
                      target="0"
                    >
                      <FaArrowUpRightFromSquare />
                    </a>
                  </div>
                </div>
                <img
                   src={`/Assets/${item.img}`}
                  alt="project"
                  width={800}
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100">
                 {item.title}
                </h2>
                <p className="text-md md:text-xl text-zinc-400">{item.dec}</p>
              </div>
            </div>
            );
          })
        }
        </div>
        <hr className='bg-white' />
      </div>
    </section>
  );
};

export default Works;
