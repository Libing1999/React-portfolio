import About from "./components/About";
import HeroImage from "./components/HeroImage";
import MessageBot from "./components/MessageBot";
import MessageContent from "./components/MessageContent";
import NavBar from "./components/NavBar";
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
        {/* <MessageContent/> */}
        <div className="mt-96">sbfhsfs</div>
      </div>
    </div>
  );
}

export default App;
