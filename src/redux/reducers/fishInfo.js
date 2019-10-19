import { getFishInfoAction, clearStateAction } from '../actionCreators';
import { STATES } from '../../constants';

const initialState = { isFetching: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case getFishInfoAction().REQUEST:
      return { ...state, isFetching: true, };
    case getFishInfoAction().SUCCESS:
      return { ...state, ...action.payload[0], isFetching: false, };
    case getFishInfoAction().FAIL:
      return { ...state, isFetching: false, };
    case clearStateAction()[STATES.FISH_INFO]:
      return initialState;
    default:
      return state;
  }
};
