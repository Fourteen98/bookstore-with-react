import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { useState } from 'react';
import { addBookThunk } from '../redux/books/books';

const Form = () => {
  const [bookInfo, setBookInfo] = useState({ title: '', author: '', category: '' });
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.target.previousElementSibling.value = '';
    // eslint-disable-next-line no-param-reassign
    event.target.previousElementSibling.previousElementSibling.value = '';
    dispatch(addBook(uuid(), bookInfo.title, bookInfo.author));
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
