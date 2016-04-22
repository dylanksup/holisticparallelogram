import { combineReducers } from 'redux';
import places from './places.js';
import savedPlaces from './savedPlaces.js';
import user from './user.js';
import deletePlace from './deletePlace.js';

const rootReducer = combineReducers({
  places,
  savedPlaces,
  deletePlace,
  user
});

export default rootReducer;
