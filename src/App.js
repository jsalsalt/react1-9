import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import Table from "./Table";
import './App.css';

const App = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([{
    bookTitle: "Book1",
    bookAuthor: "A1",
    bookIsbn: "ldkgjklds",
    bookId: uuidv4()
  }]);

  const isValid = () => {
    return (title.trim() !== "" && author.trim() !==  "" && isbn.trim() !=="");
  };

  const clearInputs = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.bookId !== id));
  };

  const editBook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);
    setCurrentBookId(book.bookId);
  };

  const updateBook = () => {
    setBooks(books.map(book => book.bookId === currentBookId ?
      { ...books, bookTitle: title, bookAuthor: author, bookIsbn: isbn } :
      book));
  };

  const cancelUpdate = () => {
    clearInputs();
    setCurrentBookId(null);
  };
 
  const addBook = () => {
    setBooks([...books, {
      bookTitle: title,
      bookAuthor: author,
      bookIsbn: isbn,
      bookId: uuidv4()
    }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid()) { return };

    !currentBookId ? addBook() : updateBook();
    clearInputs();
    setCurrentBookId(null);    
  };

  return (
    <div className="App">
      <div className="container">
        <Form
          title={title}
          author={author}
          isbn={isbn}
          setTitle={setTitle}
          setAuthor={setAuthor}
          setIbsn={setIsbn}
          currentBookId={currentBookId}
          handleSubmit={handleSubmit}
          handleCancel={cancelUpdate}
        ></Form>
        <Table
          books={books}
          removeBook={removeBook}
          editBook={editBook}        
        ></Table>
      </div>
    </div>
  );
}

export default App;
