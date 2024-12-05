import Navbar from "./componant/Navbar";
import './App.css'
import Home from "./componant/Home";
import About from "./componant/Education";
import Achivement from "./componant/Achivement";
import Works from "./componant/Works";
import Contact from "./componant/Contact";
function App() {
  return (
    <div className="App bg-[#212428] pb-[50px] min-h-screen  w-100 ">
      <Navbar />
      <Home />
      <About />
      <Achivement />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
