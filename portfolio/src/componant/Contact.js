import React from "react";
import img from "../Assets/contact1.png";
import { LuPhoneCall } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa6";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <section className="section" section id="Contact">
      <div className="container">
        <h6 className="text-center text-[#FF014F] my-4">Contact</h6>
        <h1 className="text-white text-5xl text-center">Contact With Me</h1>
        <div className="w-[150px] h-[3px] mx-auto my-3 bg-[#FF014F]"></div>
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] xl:grid-cols-[30%_70%] my-14 gap-2">
          <div className="w-full md:w-[70%] lg:w-full relative my-8 lg:my-0  rounded-3xl mx-auto  p-6 space-y-4 text-white/75  bg-gradient-to-t from-gray-1000 via-gray-800 to-transparent shadow-[0px_0px_24px_1px_rgba(253,253,253,0.2)]">
            <div className=" relative overflow-hidden rounded-2xl group">
              <img
                src={img}
                alt="Project"
                width={800}
                className="object-cover group-hover:scale-110 duration-500"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-zinc-100">
                Dhruv Savaliya
              </h2>
              <span>Front-end Developer</span>
              <p className="text-[16px] text-zinc-400">
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>
              <div className="contact-detail">
                <div className="text-[16px] my-2 flex items-center gap-3">
                  <LuPhoneCall /> +00 00101010101
                </div>
                <div className="text-[16px] my-2 flex items-center gap-3">
                  <IoMdMail />
                  official.dhruv1395@gmail.com
                </div>
              </div>
              <div className="links lg:absolute bottom-8 flex space-x-5">
                <div className="in py-3 px-3 text-2xl bg-[#1E2125] rounded cursor-pointer hover:-translate-y-2 transition-all duration-300">
                  <a
                    href="https://www.linkedin.com/in/dhruv-savaliya-5a1063303/"
                    target="0"
                  >
                    <FiLinkedin />
                  </a>
                </div>
                <div className="in py-3 px-3 text-2xl bg-[#1E2125] rounded cursor-pointer hover:-translate-y-2 transition-all duration-300">
                  <a href="https://github.com/Dhruv-1395" target="0">
                    <FaGithub />
                  </a>
                </div>
                <div className="in py-3 px-3 text-2xl bg-[#1E2125] rounded cursor-pointer hover:-translate-y-2 transition-all duration-300">
                  <a href="https://stackoverflow.com/users/28657714/dhruv-official?tab=profile" target="0">
                  <FaStackOverflow />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
