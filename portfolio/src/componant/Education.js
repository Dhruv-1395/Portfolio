import React from 'react'
import '../Css/Education.css'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
const About = () => {
  return (
   <section id='Education'>
        <div className="container">
            <h1 className='text-white text-5xl text-center'>Education</h1>
            <div className="row py-8">
                <div className="col-lg-6 ">
                  <div className="ed  py-5 rounded-lg px-3 my-4 mx-auto w-75  hover:bg-slate-400 duration-200">
                    <h3 className='text-3xl font-bold my-2'>Higher Secondary School </h3>
                    <span className='text-sm'>Gyanganga Higher Secondary School-Rajkot (2022-2023)</span>
                    <hr className='my-3'/>
                    <p>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                  </div>
                </div>
                <div className="col-lg-6 ">
                <div className="ed  py-5 rounded-lg px-3 my-4 mx-auto w-75 duration-200">
                    <h3 className='text-3xl font-bold my-2'>BSc in Information Tachnology</h3>
                    <span className='text-sm'>Saurashtra University-Rajkot (2023-2026)</span>
                    <hr className='my-3'/>
                    <p>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                  </div>
                </div>
            </div>
            <hr className='bg-white'/>
        </div>
   </section>
  )
}

export default About
