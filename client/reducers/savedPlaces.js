import * as types from '../constants/ActionTypes.js';

const initialState = [];

export default function places (state = initialState, action) {
  switch (action.type) {
    case types.SAVE_PLACE:
      for (var i = 0; i < state.length; i++) {
        if (state[i].googlePlaceId === action.place.googlePlaceId) {
          return state;
        }
      }
      return state.concat(action.place);
      break;

    case types.DELETE_PLACE:
      var updatedPlaces = [];
      for (var i = 0; i < state.length; i++) {
        if (state[i].googlePlaceId !== action.place.googlePlaceId) {
          updatedPlaces.push(state[i]);
        }
      }
      state = updatedPlaces;
      return state;
      break;

    default:
      return state;
  }
}
