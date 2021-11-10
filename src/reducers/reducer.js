import {
  LOAD_LIST,
} from '../actions/actionTypes'

const initialState = {
  items: [],
  loading: false,
  error: null,
  search: '',
};

export default function listReducer(state = initialState, action) {
  switch (action.type) { //экшен отправки запроса
    case LOAD_LIST:

    // process.env.REACT_APP_SEARCH_URL
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
}
