import React from 'react'
import '../Css/Education.css'
// import gsap from 'gsap'
// import ScrollTrigger from "gsap/ScrollTrigger";
const About = () => {
  return (
    <section id='Education'>
      <div className="container">
        <h1 className='text-white text-5xl text-center'>Education</h1>
        <div className="w-[150px] h-[3px] mx-auto my-2 bg-[#FF014F]"></div>
        <div className="row py-8">
          <div className="col-lg-6 ">
            <div class="ed text-white max-w-xl p-8 rounded-lg ">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-xl font-bold">Higher Secondary School</h3>
                  <p class="text-gray-400 text-sm">Gyanganga Higher Secondary School-Rajkot (2022-2023)</p>
                </div>
              </div>
              <hr class="my-4 border-gray-700" />
              <p class="text-gray-400 text-sm">
                Higher education is tertiary education leading to the award of an academic degree. Higher education, also called post-secondary education.
              </p>
            </div>
          </div>
          <div className="col-lg-6 ">
          <div class="ed text-white max-w-xl p-8 rounded-lg ">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-xl font-bold">BSc in Information Tachnology</h3>
                  <p class="text-gray-400 text-sm">Saurashtra University-Rajkot (2023-2026)</p>
                </div>
              </div>
              <hr class="my-4 border-gray-700" />
              <p class="text-gray-400 text-sm">
                Higher education is tertiary education leading to the award of an academic degree. Higher education, also called post-secondary education.
              </p>
            </div>
          </div>
        </div>
        <hr className='bg-white' />
      </div>
    </section>
  )
}

export default About
