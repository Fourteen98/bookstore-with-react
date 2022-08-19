import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooksThunk, removeBookThunk } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksThunk());
  }, []);

  return (books.map((book) => (
    <div key={book.id} className="card">
      <div className="book--info">
        <span>{book.category}</span>
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <ul className="book--utils">
          <button
            type="button"
          >
            Comment
          </button>
          <button
            id={book.id}
            type="button"
            onClick={
              (event) => {
                event.preventDefault();
                dispatch(removeBookThunk(event.target.id));
              }
            }
          >
            Remove
          </button>
          <button
            type="button"
          >
            Edit
          </button>
        </ul>
      </div>
      <div className="progress">
        <h4>60%</h4>
      </div>
      <div className="chapter">
        <h4>Current Chapter</h4>
        <h5>Chapter 02</h5>
        <button type="button">IN PROGRESS</button>
      </div>
    </div>
  )));
};

export default Book;
