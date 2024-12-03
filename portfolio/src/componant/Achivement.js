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

        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-5">
          <div className="Ac py-4 px-2 rounded-lg mx-auto w-[100%] max-xl:w-[100%] duration-300 ">
            <div className="py-2 ">
              <img
                src={img1}
                alt="Image description"
                className="max-w-[80%] mx-auto duration-300 rounded"
              />
            </div>
            <p className="mt-4 text-[17px] ">
              <span className="text-[22px] text-[#FF014F] font-bold">
                Web Development Virtual Internship:-
              </span>
              <br />
              During my 1-month virtual internship in web development, I gained
              hands-on experience in building and maintaining websites. I had
              the opportunity to work on front-end tasks, using technologies
              such as HTML, CSS, and JavaScript. The experience allowed me to
              further hone my skills in web development while contributing to
              real-world projects.
            </p>
          </div>

          <div className="Ac py-4 px-2 rounded-lg mx-auto w-[100%] max-xl:w-[100%] duration-300 ">
            <div className="py-2 ">
              <img
                src={img2}
                alt="Image description"
                className="max-w-[80%] mx-auto duration-300 rounded"
              />
            </div>
            <p className="mt-4 text-[17px]  ">
              <span className="text-[22px] text-[#FF014F] font-bold">
                Hackathon Participation - [Code Carnival]:-
              </span>
              <br />I had the exciting opportunity to participate in the [Event
              Name] Hackathon, a fast-paced, innovative competition where teams
              collaborated to develop creative solutions to real-world problems
              within a limited time frame.
            </p>
          </div>

          <div className="Ac py-4 px-2 rounded-lg mx-auto w-[100%] max-xl:w-[100%] duration-300 ">
            <div className="py-2 ">
              <img
                src={img3}
                alt="Image description"
                className="max-w-[80%] mx-auto duration-300 rounded"
              />
            </div>
            <p className="mt-4 text-[17px]  ">
              <span className="text-[22px] text-[#FF014F] font-bold">
                1st Rank Achievement in Code Hunter College Event:-
              </span>
              <br />I have secured 1st rank in the Code Hunter event at
              [Sarvodaya College], a prestigious coding competition that
              challenged participants with a series of complex algorithms,
              problem-solving tasks, and coding challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achivement;
