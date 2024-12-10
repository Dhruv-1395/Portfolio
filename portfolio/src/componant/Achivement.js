import React from "react";
import "../Css/Achivement.css";
import img1 from "../Assets/internship_cipherbyte.png";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";

const Achivement = () => {
  return (
    <section id="Achivement">
      <div className="container">
        <h1 className="text-white text-5xl text-center">Achivement</h1>
        <div className="w-[150px] h-[3px] mx-auto my-2 bg-[#FF014F]"></div>
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-5">

        <div className="Ac w-full  p-6 space-y-4 rounded-2xl">
        <div className="w-auto relative overflow-hidden rounded-2xl ">
          <img
            src={img1}
            alt="Profile photo"
            width={800}
            className="object-cover duration-300 "
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
          Web Development Virtual Internship:-
          </h2>
          <p className="text-[18px] text-zinc-400">
          During my 1-month virtual internship in web development, I gained
              hands-on experience in building and maintaining websites. I had
              the opportunity to work on front-end tasks, using technologies
              such as HTML, CSS, and JavaScript. The experience allowed me to
              further hone my skills in web development while contributing to
              real-world projects.
          </p>
        </div>
      </div>

      <div className="Ac w-full  p-6 space-y-4 rounded-2xl">
        <div className="w-auto relative overflow-hidden rounded-2xl ">
          <img
            src={img2}
            alt="Profile photo"
            width={800}
            className="object-cover duration-300 "
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
          Hackathon Participation - [Code Carnival]:-
          </h2>
          <p className="text-[18px] text-zinc-400">
          I had the exciting opportunity to participate in the [Event
              Name] Hackathon, a fast-paced, innovative competition where teams
              collaborated to develop creative solutions to real-world problems
              within a limited time frame.
          </p>
        </div>
      </div>

      <div className="Ac w-full  p-6 space-y-4 rounded-2xl">
        <div className="w-auto relative overflow-hidden rounded-2xl ">
          <img
            src={img3}
            alt="Profile photo"
            width={800}
            className="object-cover duration-300 "
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-100">
          1st Rank Achievement in Code Hunter College Event:-
          </h2>
          <p className="text-[18px] text-zinc-400">
          I have secured 1st rank in the Code Hunter event at
              [Sarvodaya College], a prestigious coding competition that
              challenged participants with a series of complex algorithms,
              problem-solving tasks, and coding challenges.
          </p>
        </div>
      </div>
        </div>
        <hr className='bg-white' />

      </div>
    </section>
  );
};

export default Achivement;
