import axios from 'axios';
import uuid from 'react-uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const appId = 'QsnowAgZmrLhT9k8GVE2';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

const REMOVE_BOOK = 'bookstore-with-react/books/REMOVE_BOOK';
const ADD_BOOK = 'bookstore-with-react/books/ADD_BOOK';
const GET_BOOKS = 'bookstore-with-react/books/GET_BOOKS';

export const getBooksThunk = createAsyncThunk(GET_BOOKS, async () => {
  const response = await axios.get(`${baseUrl}/${appId}/books/`);
  const res = response.data;
  return res.map(
    (book) => (
      {
        id: book.id,
        title: book.title,
        author: book.author,
        category: book.category,
      }),
  );
});

export const addBookThunk = createAsyncThunk(
  ADD_BOOK,
  async (
    singleBook,
    thunkAPI,
  ) => {
    const book = {
      item_id: uuid(),
      title: singleBook.title,
      author: singleBook.author,
      category: singleBook.category,
    };
    await axios.post(`${baseUrl}/${appId}/books/`, book)
      .then(() => { thunkAPI.dispatch(getBooksThunk()); })
      .catch((error) => { console.log(error); });
    return thunkAPI.getState().books;
  },
);

export const removeBookThunk = createAsyncThunk(
  REMOVE_BOOK,
  async (
    bookId,
    thunkAPI
  ) => {
    await axios.delete(`${baseUrl}/${appId}/books/${bookId}`)
      .then(() => { thunkAPI.dispatch(getBooksThunk()); })
      .catch((error) => { console.log(error); });
    return thunkAPI.getState().books;
  },
);

const storeSlice = createSlice((
  {
    name: 'bookstore-with-react/books',
    initialState: [],
    extraReducers: {
      [getBooksThunk().fully.fulfilled]: (state, action) => action.payload,
      [addBookThunk.fulfilled]: (state, action) => action.payload,
    },
  }
));

// export const removeBook = (bookId) => ({
//   type: REMOVED_BOOK,
//   id: bookId,
// });
//
// export const addBook = (bookId, bookTitle, bookAuthor) => ({
//   type: ADD_BOOK,
//   id: bookId,
//   title: bookTitle,
//   author: bookAuthor,
// });
//
// export const getBooks = () => ({
//   type: GET_BOOKS,
// });

// const initialState = [
//   { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
//   { id: 2, title: 'Refactoring', author: 'Martin Fowler' },
//   { id: 3, title: 'Patterns of Enterprise Application Architecture', author: 'Martin Fowler' },
//   { id: 4, title: 'Domain Driven Design', author: 'Eric Evans' },
//   { id: 5, title: 'Clean Architecture', author: 'Robert C. Martin' },
// ];
//
// const booksReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case REMOVED_BOOK:
//       return state.filter((book) => book.id !== action.id);
//     case ADD_BOOK:
//       return [...state, { id: action.id, title: action.title, author: action.author }];
//     default:
//       return state;
//   }
// };

export default storeSlice.reducer;
