const REMOVED_BOOK = 'REMOVE_BOOK';
const ADD_BOOK = 'ADD_BOOK';

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

const booksReducer = (state = [], action) => {
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
