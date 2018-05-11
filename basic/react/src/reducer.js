
import { combineReducers } from 'redux';

import * as features from './features/reducer';
import * as appAction from './action';

const intialState = {
  appInitDataLoadingStatus:0,
  appInitData:{}
};

function appReducer(state= intialState, action) {
  const { type, payload } = action;
  switch(type) {
    case appAction.appInitDataLoadingStatus:
    return {
      ...state,
      appInitDataLoadingStatus: state.appInitDataLoadingStatus + payload
    };
    case appAction.appInitDataLoaded:
    return {
      ...state,
      appInitData: payload
    }
    default:
    return state;
  }
}


const convertToReducerArray = (reducerMap) => {
  return Object.keys(reducerMap).filter((key) => {
    return key !== 'default';
  }).reduce((sum, curKey) => {
    sum[curKey] = reducerMap[curKey];
    return sum;
  }, {});
}

const featuresReducerArray = convertToReducerArray(features);

export const combinedReducers = combineReducers({
  appReducer, 
  ...featuresReducerArray
});



