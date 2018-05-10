
import { combineReducers } from 'redux';

import * as home from './home/reducer';

const convertToReducerArray = (reducerMap) => {
  return Object.keys(reducerMap).filter((key) => {
    return key !== 'default';
  }).map((key) => {
    return reducerMap[key];
  });
}

const homeReducerArray = convertToReducerArray(home);

export const combinedReducers = combineReducers([...homeReducerArray]);


