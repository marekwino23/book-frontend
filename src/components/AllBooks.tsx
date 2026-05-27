import { useEffect, useState } from "react";
import "../styles/Form.css";
import { Link } from "react-router-dom"
import ReactPaginate from "react-paginate"

type Book = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  number_of_pages: number;
  rating: number;
};

const AllBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filter, setFilter] = useState("")
  const [word, setWord] = useState("")
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
  const timeout = setTimeout(() => {
    fetch(
      `http://localhost:4000/books?search=${word}&page=${page}&limit=6`
    )
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.data);
        setPageCount(data.totalPages);
      });
  }, 300);

  return () => clearTimeout(timeout);
}, [word, page]);


  return (
    <div className="books-container">
        <h2>Lista książek</h2>
        <div style={{flexDirection:"row"}} className="fancy-input">
          <input onChange={(e) => setWord(e.target.value)} type="text" placeholder="" />
          <select onChange={(e) => setFilter(e.target.value) }>
            <option id="1" value="">Twój wybór</option>
            <option id="2" value="title">Tytuł książki</option>
            <option id="3" value="author">Autor</option>
          </select>
        </div>
        <ul>
         {books
         .map((book) => (
          <div key={book.id} className="book-card">
            <h2>{book.title}</h2>
            <p><b>Autor:</b> {book.author}</p>
            <p><b>ISBN:</b> {book.isbn}</p>
            <p><b>Strony:</b> {book.number_of_pages}</p>
            <p><b>Ocena:</b> ⭐ {book.rating}/5</p>
          </div>
        ))}
        </ul>
        <ReactPaginate
  breakLabel="..."
  nextLabel="następna strona"
  previousLabel="poprzednia strona"
  onPageChange={(selectedItem) => {
    setPage(selectedItem.selected + 1);
  }}
  pageRangeDisplayed={3}
  pageCount={pageCount}
  renderOnZeroPageCount={null}
  containerClassName="pagination"
  activeClassName="active"
/>
        <Link to="/">Wróć</Link>   
    </div>
  );
};

export default AllBooks;
