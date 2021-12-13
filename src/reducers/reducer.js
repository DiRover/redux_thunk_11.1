import {
    LOAD_LIST,
    LOAD_LIST_SUCCESS,
    LOAD_LIST_FAILED,
    LOAD_DESCRIPTION,
    LOAD_DESCRIPTION_SUCCESS,
    CANCEL,
    UPLOAD_SERVICE,
    UPLOAD_SERVICE_SUCCESS,
    UPLOAD_SERVICE_FAILED,
    LOAD_DESCRIPTION_FAILED,
    SERVER_ERROR,
} from '../actions/actionTypes'

// начальное состояние

const initialState = {
    list: [],
    loading: false,
    error: null,
    description: null,
    id: null,
    save: null,
    upload: true,
};

//здоровый редьюсер

export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case SERVER_ERROR: //ошибка сервера
            return {
                ...state,
                loading: false,
                error: true
            }
        case LOAD_LIST: //начало загрузки списка
            return {
                ...state,
                loading: true,
                list: [],
                error: false,
                save: null,
            };
        case LOAD_LIST_SUCCESS: // удачная загрузка списка
            return {
                ...state, loading: false, error: false, list: action.payload,
            }
        case LOAD_LIST_FAILED: // неудачная загрузка списка
            return {
                ...state, loading: false, error: true,
            }
        case LOAD_DESCRIPTION: //начало загрузки описания
            return {
                ...state, loading: true, error: false, id: action.payload, save: false, description: null,
            }
        case LOAD_DESCRIPTION_SUCCESS: // удачная загрузка описания
            return {
                ...state, loading: false, error: false, description: action.payload, id: null,
            }
        case LOAD_DESCRIPTION_FAILED: // неудачная загрузкао описания
            return {
                ...state, loading: false, error: true, description: null, id: null,
            }
        case CANCEL: // отмена редактирования описания
            return {
                ...state, description: null, loading: false, error: false, upload: true,
            }
        case UPLOAD_SERVICE: // загрузка отредактированного описания на сервер
            return {
                ...state, loading: true, error: false,
            }
        case UPLOAD_SERVICE_SUCCESS: // удачная загрузка отредактированного описания на сервер
            return {
                ...state, loading: false, error: false, description: null, list: [], save: true, upload: true,
            }
        case UPLOAD_SERVICE_FAILED: //не удачная загрузка отредактированного описания на сервер
            return {
                ...state, loading: false, error: false, save: false, upload: false,
            }
        default:
            return state;
    }
}
