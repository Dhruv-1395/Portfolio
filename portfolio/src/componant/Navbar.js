import React,{useState,useRef,useEffect} from 'react'
import logo from '../Assets/logos-circle.png'
import sound from '../sound/click.wav'
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
// import {gsap} from 'gsap';
const Navbar = () => {
    const [activemenu,setActiveMenu] = useState('#Home');
    const [togglemenu,setToggleMenu] = useState(false);
    const toggleMenuRef = useRef(null);
    const Menu = [
        { name: "Home", path: "#Home" },
        { name: "Education", path: "#Education" },
        { name: "Achivement", path: "#Achivement" },
        { name: "Projects", path: "#Projects" },
        { name: "Contact", path: "#Contact" },

    ];
    
    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        const audio = new Audio(sound);
        audio.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      };

    const HandleActiveStyle = (menu) =>{
       
        if(menu === activemenu){
            return {borderBottom:'2px solid #FF093D',color:'#FF093D'}
        }
    }
    const HandleToggle = () =>{
        let toggle = toggleMenuRef.current;
        toggle.style.left=0;
        setToggleMenu(true)
        
    }
    const HandleMenuClose = () =>{
        let toggle = toggleMenuRef.current;
        toggle.style.left='-200px';
        setToggleMenu(false)

    }
    // window.onscroll = function() {
    //     if (window.scrollY > 100) {
    //         Anime();
    //     } else {
    //         gsap.to('#Navbar',{
    //             y:'0',
    //             duration:0.2,
    //             position:'sticky',
    //             top:0,
    //         })
    //     }
    // };
    return (
        <>
              <nav className='py-2 px-4 flex justify-between items-center z-50 transition-all duration-300 sticky top-0 shadow' id='Navbar'>
            <div className="logo flex items-center space-x-4">
                <img src={logo} alt="logo" />
                <h4 className="text-2xl text-white">Portfolio</h4>
            </div>
            {
                (togglemenu)? <div className="cls-menu text-white text-5xl hidden max-[900px]:block cls-btn-anime" onClick={HandleMenuClose}><IoIosClose /></div> 
                :
                <div className="toggle-btn text-white text-4xl hidden max-[900px]:block cursor-pointer" onClick={HandleToggle}><IoMenu /></div>
            }
         

            <div ref={toggleMenuRef} className={`menus toggle-menu `}>
               
                <ul className="flex space-x-10 text-white max-[900px]:space-x-0 ">
                    {Menu.map((item, index) => {
                        return (
                            <a href={item.path} key={index}>
                                <li
                                    className="text-lg font-semibold hover:text-[#FF093D] cursor-pointer transition duration-500"
                                    onClick={() => {
                                        handleMenuClick(item.path);
                                    }}
                                    style={HandleActiveStyle(item.path)}
                                >
                                    {item.name}
                                </li>
                            </a>
                        );
                    })}
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar