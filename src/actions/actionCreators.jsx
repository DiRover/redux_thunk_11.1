import {
    LOAD_LIST,
    LOAD_LIST_SUCCESS,
    LOAD_LIST_FAILED,
    LOAD_DESCRIPTION,
    LOAD_DESCRIPTION_SUCCESS,
    CANCEL,
} from './actionTypes';

// создание экшенов

// экшен поиска
export const loadList = () => {
    return {
        type: LOAD_LIST,
    }
};

// эксшен удачной загрузки списка
export const loadListSuccess = (list) => {
    return {
        type: LOAD_LIST_SUCCESS,
        payload: list,
    }
}

//экшен неудачной загрузки списка
export const loadListFailed = () => {
    return {
        type: LOAD_LIST_FAILED,
    }
}

//экшен загрузки описания
export const loadDescription = (id) => {
    return {
        type: LOAD_DESCRIPTION,
        payload: id,
    }
}
//экшен загрузки описания
export const loadDescriptionSuccess = (data) => {
    return {
        type: LOAD_DESCRIPTION_SUCCESS,
        payload: data,
    }
}

//экшен отмены редактирования услуги
export const cancel = () => {
    return {
        type: CANCEL,
    }
}