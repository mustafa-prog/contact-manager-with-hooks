import { ADD_PERSON } from '../actions/index';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [...state, action.data];
    default:
      return state;
  }
};

export default reducer;
