import * as types from '../constants/ActionTypes.js';

const initialState = [];

export default function places (state = initialState, action) {
  switch (action.type) {
    case types.DELETE_PLACE:
      for (var i = 0; i < state.length; i++) {
        if (state[i].googlePlaceId === action.place.googlePlaceId) {
          state.splice(i, 1);
          return state;
        }
      }
    default: 
      return state;
  }
}
