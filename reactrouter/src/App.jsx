import { Routes, Route } from "react-router-dom";
import { useState, useRef, reateContext, useContext } from "react";
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
import Message from "./pages/Message";
import Greeting from "./pages/Greeting";
import Card from "./pages/Card";
import ListStudent from "./pages/ListStudent";
import ListCountry from "./pages/ListCountry";
import ListMovie from "./pages/ListMovie";
import Product from "./pages/Product";
import FavoritColors from "./pages/FavoritColors";
import Book from "./pages/Book";
import AgeDisplay from "./pages/AgeDisplay";
import HobbyList from "./HobbyList";
import UserCard from "./UserCard";
import OrderSummary from "./pages/OrderSummary";
import CoffeeList from "./pages/CoffeList";
import FocusInput from "./pages/FocusInput";
import RenderCounter from "./pages/RenderCounter";
import Stopwatch from "./pages/Stopwatch";
import TodoApp from "./pages/ToDoApp";
import { ThemeProvider } from "./pages/ThemeContext";
import ThemeButton from "./pages/ThemeButton";
import { AuthProvider } from "./pages/AuthContext";
import UserProfil from "./pages/UserProfil";
import { LanguageProvider } from "./pages/LanguageContext";
import GreetingPr from "./pages/GreetingPr";
import LanguageButtons from "./pages/LanguageButtons";
import { CartProvider } from "./pages/CartContext";
import CartStatus from "./pages/CartStatus";
import AddToCartButton from "./pages/AddToCartButton";
import { StudentProvider } from "./pages/StudentContext";
import StudentProfile from "./pages/StudentProfile";
import EditProfile from "./pages/EditProfile";
import { BooksProvider } from "./pages/BooksContext";
import BookList from "./pages/BookList";
import AddBookForm from "./pages/AddBookForm";
import { GameProvider } from "./pages/GameContext";
import ScoreBoard from "./pages/ScoreBoard";
import GameControls from "./pages/GameControls";
import { WeatherProvider } from "./pages/WeatherContext";
import CitySelector from "./pages/CitySelector";
import WeatherDisplay from "./pages/WeatherDisplay";
function App() {
  const studentNames = ["Alex", "John", "Maria", "David"];
  const countriesData = [
    { name: "USA", capital: "Washington D.C." },
    { name: "France", capital: "Paris" },
    { name: "Japan", capital: "Tokyo" },
  ];
  const moviesData = [
    { title: "Inception", year: 2010, rating: 8.8 },
    { title: "Interstellar", year: 2014, rating: 8.6 },
    { title: "The Dark Knight", year: 2008, rating: 9.0 },
  ];

  const hobbies = ["Reading", "Cycling", "Coding"];
  const coffees = [
    { id: 1, name: "Espresso", price: 2.5 },
    { id: 2, name: "Cappuccino", price: 3.5 },
    { id: 3, name: "Latte", price: 4.0 },
    { id: 4, name: "Americano", price: 2.8 },
  ];

  // State for orders
  const [order, setOrder] = useState([]);
  const [customer, setCustomer] = useState("");
  const inputRef = useRef(null); //  will be used to focus input
  const totalOrders = useRef(0); //  count how many orders were made (no re-render)

  // Function to add coffee to order
  const addToOrder = (coffee) => {
    setOrder([...order, coffee]);
  };

  const handlePlaceOrder = () => {
    if (!customer) {
      alert("Please enter customer name!");
      inputRef.current.focus(); //  focus input if empty
      return;
    }
    totalOrders.current += 1; //  update counter, no re-render
    alert(
      ` Order placed for ${customer}. Total orders so far: ${totalOrders.current}`
    );
    setOrder([]);
    setCustomer("");
    inputRef.current.focus(); // focus again after placing order
  };
  return (
    <div>
      {/* <h2>My Website</h2> */}
      {/* Route është një "rrugë" që tregon çfarë faqeje të shfaqet kur vizitojmë një URL të caktuar. */}
      {/* <Navbar /> te qendroj gjithmon ne ekran */}
      {/* <Routes>
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
      </Routes> */}
      {/* <Greeting name="Arbresha" />
      <Greeting name="John" />
      <Greeting />
      <Message text="Welcome to React!" />
      <Message text="Props are like variables we pass to components." />
      <Message text="This makes components reusable." />
      <Card
        title="React Basics"
        description="Learn how to use components, props, and state."
      />
      <Card
        title="JavaScript"
        description="Understand variables, functions, and loops."
      />
      <Card
        title="CSS Styling"
        des
        cription="Make your websites look amazing."
      /> */}
      {/* <ListStudent names={studentNames} />
      <ListCountry countries={countriesData} />
      <ListMovie movies={moviesData} />
      <Product productName="Laptop" price={999} />
      <Product productName="Headphones" price={59} />
      <FavoritColors colors={["Red", "Blue", "Green"]} />
      <Book title="The Great Gatsby" author="F. Scott Fitzgerald" year={1925} />
      <Book title="1984" author="George Orwell" year={1949} /> */}

      {/* Passing string */}
      {/* <Greeting name="Arbresha" /> */}
      {/* Passing number */}
      {/* <AgeDisplay age={25} /> */}
      {/* Passing array */}
      {/* <HobbyList hobbies={hobbies} /> */}
      {/* Passing object */}
      {/* <UserCard user={{ name: "John Doe", email: "john@example.com" }} /> */}
      {/* <h1>☕ Coffee Shop Management</h1> */}
      {/* Passing data & function as props */}
      {/* <input
        ref={inputRef}
        type="text"
        placeholder="Enter customer name"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
        style={{ padding: "5px", marginBottom: "15px" }}
      /> */}
      {/* <CoffeeList coffees={coffees} onAddToOrder={addToOrder} /> */}
      {/* Passing order as props */}
      {/* <OrderSummary order={order} /> */}
      {/* <button
        onClick={handlePlaceOrder}
        style={{ marginTop: "15px", padding: "8px 12px" }}
      >
        Place Order
      </button> */}
      <br />
      {/* <FocusInput />
      <RenderCounter />
      <Stopwatch />
      <TodoApp /> */}
      <ThemeProvider>
        <h1>useContext Example</h1>
        <ThemeButton />
      </ThemeProvider>

      <AuthProvider>
        <h1>useContext – Auth Example</h1>
        <UserProfil />
      </AuthProvider>

      <LanguageProvider>
        <h1>useContext – Language Example</h1>
        <GreetingPr />
        <LanguageButtons />
      </LanguageProvider>

      <CartProvider>
        <h1> Shopping Cart Example</h1>
        <CartStatus />
        <AddToCartButton />
      </CartProvider>

      <StudentProvider>
        <h1> Student Info Manager</h1>
        <StudentProfile />
        <EditProfile />
      </StudentProvider>

      <BooksProvider>
        <h1> Favorite Books</h1>
        <AddBookForm />
        <BookList />
      </BooksProvider>

      <GameProvider>
        <h1>🎮 Score Tracker Game</h1>
        <ScoreBoard />
        <GameControls />
      </GameProvider>

      <WeatherProvider>
        <h1>🌦️ Weather App</h1>
        <CitySelector />
        <WeatherDisplay />
      </WeatherProvider>
    </div>
  );
}

export default App;
