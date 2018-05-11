import * as homeAction from './action';

const intialState = {
  featuresHomeLoadingStatus:0,
  featuresHomeLoaded:{}
}


function featureHomeReducer(state= intialState, action) {
  const { type, payload } = action;
  switch(type) {
    case homeAction.featuresHomeLoadingStatus:
    return {
      ...state,
      featuresHomeLoadingStatus: state.featuresHomeLoadingStatus + payload
    };
    case homeAction.featuresHomeLoaded:
    return {
      ...state,
      featuresHomeLoaded: payload
    }
    default:
    return state;
  }
}
