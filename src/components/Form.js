import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [bookInfo, setBookInfo] = useState({ title: '', author: '' });
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(addBook(books.length + 1, bookInfo.title, bookInfo.author));
  };

  const handleChange = (event) => {
    setBookInfo({
      ...bookInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="form">
      <input
        type="text"
        name="title"
        placeholder="Author"
        className="title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Book"
        className="author"
        onChange={handleChange}
      />
      <input
        type="submit"
        value="Submit"
        className="submit"
        onClick={handleClick}
      />

    </form>
  );
};

export default Form;

// (event) => {
//   event.preventDefault();
//   const title = event.target.previousElementSibling.value;
//   const author = event.target.previousElementSibling.previousElementSibling.value;
//   if (title && author) {
//     dispatch(addBook(books.length + 1, title, author));
//     // eslint-disable-next-line no-param-reassign
//     event.target.previousElementSibling.previousElementSibling.value = '';
//     // eslint-disable-next-line no-param-reassign
//     event.target.previousElementSibling.value = '';
//   } else {
//     alert('Please fill in all fields');
//   }
// }}
