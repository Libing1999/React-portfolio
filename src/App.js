import About from "./pages/about/About";
import NaavBar from "./layouts/NaavBar";
import Home from "./pages/home/Home";
import Skill from "./pages/skill/Skill";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";
import Footer from "./layouts/Footer.jsx";
import MessageBot from "./components/MessageBot";

function App() {
  return (
    <>
      <NaavBar />
      <MessageBot />
      <Home />
      <About />
      {/* <Skill />
      <Project />
      <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
