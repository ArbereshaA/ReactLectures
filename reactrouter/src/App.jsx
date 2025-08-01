import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Counter from "./pages/Counter";
import ToggleParagraph from "./pages/ToggleParagraph";
import ShowText from "./pages/ShowText";
import LightDarkMode from "./pages/LightDarkMode";

function App() {
  return (
    <div>
      <h2>My Website</h2>
      {/* Route është një "rrugë" që tregon çfarë faqeje të shfaqet kur vizitojmë një URL të caktuar. */}
      <Navbar /> {/*te qendroj gjithmon ne ekran */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/show-text" element={<ShowText />} />
        <Route path="/toggle-paragraph" element={<ToggleParagraph />} />
        <Route path="/light-dark" element={<LightDarkMode />} />
      </Routes>
    </div>
  );
}

export default App;
