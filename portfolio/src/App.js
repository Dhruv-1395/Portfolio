import Navbar from "./componant/Navbar";
import './App.css'
import Home from "./componant/Home";
import About from "./componant/Education";
function App() {
  return (
    <div className="App bg-[#212428] min-h-screen w-100 ">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
