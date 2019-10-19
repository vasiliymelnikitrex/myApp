import { combineReducers } from 'redux';
import fishes from './fishes';
import fishDescription from './fishDescription';
import news from './news';

export default combineReducers({
  fishes,
  fishDescription,
  news,
});