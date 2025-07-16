import { useState } from "react";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import Ushtrimi2 from "./components/Ushtrimi2";
import Ushtrimi1 from "./components/Ushtrimi1";
import ShowHideImage from "./components/ShowImage";
import ToggleWindow from "./components/ToggleWindow";
import NameDisplay from "./components/Namedisplay";
import TextSizeChanger from "./components/Textsize";
import LoginApp from "./components/LoginApp";
import LightBulbToggle from "./components/LightBulbToggle";
import TextMirror from "./components/TextMirror";
import PizzaOrder from "./components/PizzaOrder";
import ProductList from "./components/ProductList";
import CommentsSection from "./components/CommentSection";
import TodoList from "./components/ToDoList";
import StudentList from "./components/StudentList";
import ContactForm from "./components/ContactForm";
import OneStateForm from "./components/OneStateForm";
import OneState from "./components/Onestate";
import FormFeedbackMultipleState from "./components/FormFeedbackMultipleState";
import FormFeedbackOneState from "./components/FormFeedbackOneState";
import Hello from "./components/UseEffect1";
import Counter from "./components/UseEffect2";
import Timerr from "./components/UsseEfect3";
import PageTitleChanger from "./components/PageTitleChanger";

function App() {
  const books = [
    {
      id: 1,
      title: "Libri i Parë",
      author: "Autori A",
      description: "Ky është një libër interesant për React.",
    },
    {
      id: 2,
      title: "Libri i Dytë",
      author: "Autori B",
      description: "Ky është një libër për JavaScript.",
    },
    {
      id: 3,
      title: "Libri i Tretë",
      author: "Autori C",
      description: "Ky është një libër për HTML dhe CSS.",
    },
  ];

  const [selectedBook, setSelectedBook] = useState(null);

  return (
    // <div>
    //   <h1>📚 Lista e Librave</h1>
    //   <BookList books={books} onSelectBook={setSelectedBook} />
    //   {selectedBook && <BookDetail book={selectedBook} />}
    // </div>
    //<Ushtrimi2 />
    //<Ushtrimi1 />
    //<ShowHideImage />
    //<ToggleWindow />
    //<NameDisplay />
    //<TextSizeChanger />
    //<LoginApp />
    //<LightBulbToggle />
    //<TextMirror />
    //<PizzaOrder />
    //<ProductList />
    //<CommentsSection />
    //<TodoList /> //ass1
    //<StudentList /> //ass2
    //<ContactForm />
    //<OneState />
    //<OneStateForm /> //with emailjs
    //<FormFeedbackMultipleState />
    //<FormFeedbackOneState />
    <Hello />
    //<Counter />
    //<Timerr />
    // <PageTitleChanger />
  );
}

export default App;
