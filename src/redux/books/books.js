const REMOVED_BOOK = 'bookstore-with-react/books/REMOVE_BOOK';
const ADD_BOOK = 'bookstore-with-react/books/ADD_BOOK';

export const removeBook = (bookId) => ({
  type: REMOVED_BOOK,
  id: bookId,
});

export const addBook = (bookId, bookTitle, bookAuthor) => ({
  type: ADD_BOOK,
  id: bookId,
  title: bookTitle,
  author: bookAuthor,
});

const initialState = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
  { id: 2, title: 'Refactoring', author: 'Martin Fowler' },
  { id: 3, title: 'Patterns of Enterprise Application Architecture', author: 'Martin Fowler' },
  { id: 4, title: 'Domain Driven Design', author: 'Eric Evans' },
  { id: 5, title: 'Clean Architecture', author: 'Robert C. Martin' },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVED_BOOK:
      return state.filter((book) => book.id !== action.id);
    case ADD_BOOK:
      return [...state, { id: action.id, title: action.title, author: action.author }];
    default:
      return state;
  }
};

export default booksReducer;
