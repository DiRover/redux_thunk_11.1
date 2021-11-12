import {
    LOAD_LIST,
    LOAD_LIST_SUCCESS,
    LOAD_LIST_FAILED,
    LOAD_DESCRIPTION,
    LOAD_DESCRIPTION_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    list: [],
    loading: false,
    error: null,
    description: null,
};

export default function listReducer(state = initialState, action) {
    switch (action.type) { //экшен отправки запроса
        case LOAD_LIST:
            return {
                ...state,
                loading: true,
            };
        case LOAD_LIST_SUCCESS:
            return {
                ...state, loading: false, error: false, list: action.payload,
            }
        case LOAD_LIST_FAILED:
            return {
                ...state, loading: false, error: true,
            }
        case LOAD_DESCRIPTION:
            return {
                ...state, loading: true,
            }
        case LOAD_DESCRIPTION_SUCCESS:
            return {
                ...state, loading: false, error: false, description: action.payload,
            }
        default:
            return state;
    }
}
