import About from "./pages/about/About";
import NavBar from "./layouts/NavBar"
import Home from "./pages/home/Home"
import Skill from "./pages/skill/Skill"
import Project from "./pages/project/Project"
import Contact from "./pages/contact/Contact"
import Footer from "./layouts/Footer.jsx"


function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>



     
    </div>
  );
}

export default App;
