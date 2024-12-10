import React, { useRef, useEffect } from 'react'
import Typed from 'typed.js';
import banner from '../Assets/banner-01.png'
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import {gsap} from 'gsap'

import '../Css/Home.css'

const Home = () => {
  const el = useRef(null);
  const homeLeftRef = useRef(null);
  const homeImgRef = useRef(null)
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Developer.', 'React.js Developer.'],
      typeSpeed: 30,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  useEffect(() => {
 
      gsap.fromTo(
        homeLeftRef.current,
        { x:-200 }, // Starting position
        { x: 0, duration:1 } // Ending position
      );
      gsap.fromTo(
        homeImgRef.current,
        { x:200,opacity:0 }, // Starting position
        { x: 0,opacity:1, duration:1 } // Ending position
      );
    
  }, []);
  return (
    <section className='w-100 h-auto' id='Home'>
      <div className="container">
        <div className="row flex-column-reverse flex-xl-row">
          <div ref={homeLeftRef} className="col-12 col-xl-7">
            
            <span className='text-white'>Welcome to my portfolio</span>
            <h1 className='text-5xl text-white my-4'>Hi,i'm <span className='text-[#FF014F]'>Dhruv Savaliya</span>
            </h1>
            <h1 className='text-4xl text-white my-3'>a <span ref={el} className='my-2' /></h1>
            <p className='text-white py-3 w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et inventore, cum blanditiis, sunt quos explicabo magni sint iusto nihil dolorum neque, atque ipsa sit enim at dignissimos doloribus! Voluptatum, consectetur.</p>
            <div className="social-links text-white my-6">
              <span>connect with me</span>
              <div className="links my-8 flex space-x-5">
                  <div className="in py-3 px-3 text-2xl bg-[#1E2125] rounded cursor-pointer hover:-translate-y-2 transition-all duration-300"><a href="https://www.linkedin.com/in/dhruv-savaliya-5a1063303/" target='0'><FiLinkedin /></a>
                  </div>
                  <div className="in py-3 px-3 text-2xl bg-[#1E2125] rounded cursor-pointer hover:-translate-y-2 transition-all duration-300"><a href="https://github.com/Dhruv-1395" target='0'><FaGithub /></a>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-5 my-8">
            <div ref={homeImgRef} className="img-container h-96 w-full mt-5 bg-[#1E2024] rounded relative ">
              <img
                src={banner}
                className=" w-75 mx-auto object-cover"
                alt="Banner"
              />
            </div>
          </div>
        </div>
        <hr className='bg-white'/>
      </div>
    </section>
  )
}

export default Home