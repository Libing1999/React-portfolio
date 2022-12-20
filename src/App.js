import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer.jsx";
import HeroImage from "./components/HeroImage";
import MessageBot from "./components/MessageBot";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Skill from "./components/Skill";
function App() {
  return (
    <div>
      <div className="max-w-screen-2xl">
        <MessageBot />
        <NavBar />
        <HeroImage />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
