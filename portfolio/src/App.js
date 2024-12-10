import { useState, useEffect } from "react";
import Navbar from "./componant/Navbar";
import "./App.css";
import Toaster from "react-hot-toast";
import Home from "./componant/Home";
import About from "./componant/Education";
import Achivement from "./componant/Achivement";
import Works from "./componant/Works";
import Contact from "./componant/Contact";
import Loader from "./componant/Loader";

function App() {
  const [isloding, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2500);

  return (
    <>
      {isloding ? (
        <Loader />
      ) : (
        <div className="App bg-[#212428] pb-[50px] relative min-h-screen  w-100 ">
          <Navbar />
          <Home />
          <div className="sectionAnime">
            <About />
          </div>
          <div className="sectionAnime">
            <Achivement />
          </div>
          <div className="sectionAnime">
            <Works />
          </div>
          <div className="sectionAnime">
            <Contact />
          </div>
          <Toaster
           position="top-center" 
           reverseOrder={false} 
           toastOptions={{
            style: {
              zIndex: 9999, // Ensure it appears above other elements
             
            },
          }}
           />
        </div>
      )}
    </>
  );
}

export default App;
