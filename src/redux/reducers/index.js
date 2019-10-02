import { combineReducers } from 'redux';
import fishes from './fishes';
import fishInfo from './fishInfo';
import news from './news';

export default combineReducers({
  fishes,
  fishInfo,
  news,
});