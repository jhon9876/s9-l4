import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import books from "./books/fantasy.json";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <SingleBook Libri={books} />
      {/* <AllTheBooks /> */}
      {/* <BookList BooksArray={books} /> */}
      <MyFooter />
    </div>
  );
}

export default App;
