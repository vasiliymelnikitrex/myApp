import { combineReducers } from 'redux';
import fishes from './fishes';
import fishInfo from './fishInfo';

export default combineReducers({
  fishes,
  fishInfo,
});