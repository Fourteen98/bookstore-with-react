const CHECK_STATUS = 'CHECK_STATUS';

export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'under construction',
});

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default categoriesReducer;
