import { combineReducers } from 'redux';
import fishes from '../redux/reducers/fishes';
import fishInfo from '../redux/reducers/fishInfo';

export default combineReducers({
  fishes,
  fishInfo,
});