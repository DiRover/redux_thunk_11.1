import { useContext } from 'react';

import {
  LOAD_LIST,
} from './actionTypes';
// создание экшенов
// экшен поиска
export const loadList = () => {
  const { getContinuation } = useContext(Context);
  return {
    type: LOAD_LIST,
  }
};
