import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Counter from "./pages/Counter";
import ToggleParagraph from "./pages/ToggleParagraph";
import ShowText from "./pages/ShowText";
import LightDarkMode from "./pages/LightDarkMode";
import StudentDetail from "./pages/StudentDetails";
import Loginform from "./pages/Loginform";
import StudentList from "./pages/StudentList";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import BlogList from "./pages/BlogList";
import BlogDetails from "./pages/BlogDetails";
import MoviePage from "./pages/MoviePage";
import CountryPage from "./pages/CountryPage";
import AnimalPage from "./pages/AnimalPage";
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
        <Route path="/loginform" element={<Loginform />}>
          {" "}
        </Route>
        <Route path="/students" element={<StudentList />}></Route>
        <Route path="/students/:name" element={<StudentDetail />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/countries/:countryName" element={<CountryPage />} />
        <Route path="/animals/:animalName" element={<AnimalPage />} />
      </Routes>
    </div>
  );
}

export default App;
