import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Naavbar from "./layouts/NaavBar";
import Resume from "./pages/resume/Resume";
import Footer from "./layouts/Footer.jsx";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Naavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    <div className="mt-12 sm:mt-32"><Footer/></div> 
    </>
  );
}

export default App;
