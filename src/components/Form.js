import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <form className="form">
      <input
        type="text"
        name="title"
        placeholder="Author"
        className="title"
      />
      <input
        type="text"
        name="author"
        placeholder="Book"
        className="author"
      />
      <input
        type="submit"
        value="Submit"
        className="submit"
        onClick={(event) => {
          event.preventDefault();
          const title = event.target.previousElementSibling.value;
          const author = event.target.previousElementSibling.previousElementSibling.value;
          if (title && author) {
            dispatch(addBook(books.length + 1, title, author));
            // eslint-disable-next-line no-param-reassign
            event.target.previousElementSibling.previousElementSibling.value = '';
            // eslint-disable-next-line no-param-reassign
            event.target.previousElementSibling.value = '';
          } else {
            alert('Please fill in all fields');
          }
        }}
      />

    </form>
  );
};

export default Form;
