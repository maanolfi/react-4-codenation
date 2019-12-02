//reducer
import CHARACTERS_TYPE from './types';

const initState = {
  data: [],
  message: '',
  selected: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'RESULT':
      return {
        ...state,
        data: [...action.data.data]
      };
    case 'SELECT_CHARACTER':
      return {
        ...state,
        selected: action.character
      };
    default:
      return state;
  }
};
