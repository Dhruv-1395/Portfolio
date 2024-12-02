import React from 'react'
import '../Css/Education.css'
import img1 from '../Assets/internship_cipherbyte.png'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'

const Achivement = () => {
    return (
        <section id='Achivement'>
            <div className="container">
            <h1 className='text-white text-5xl text-center'>Achivement</h1>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-5">
                    <div className="ed py-4 rounded-lg px-0  mx-auto w-75  hover:bg-slate-400 duration-200">
                       <div className="img">
                        <img src={img1} alt="" className='max-w-[80%] mx-auto'/>
                       </div>
                    </div>
                    <div className="ed py-4 rounded-lg px-0  mx-auto w-75  hover:bg-slate-400 duration-200">
                       <div className="img">
                        <img src={img2} alt="" className='max-w-[80%] mx-auto'/>
                       </div>
                    </div>
                    <div className="ed py-4 rounded-lg px-0  mx-auto w-75  hover:bg-slate-400 duration-200">
                       <div className="img">
                        <img src={img3} alt="" className='max-w-[80%] mx-auto'/>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achivement