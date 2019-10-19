import { getFishDescriptionAction, clearStateAction } from '../actionCreators';
import { STATES } from '../../constants';

const initialState = { isFetching: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case getFishDescriptionAction().REQUEST:
      return { ...state, isFetching: true, };
    case getFishDescriptionAction().SUCCESS:
      return { ...state, ...action.payload[0], isFetching: false, };
    case getFishDescriptionAction().FAIL:
      return { ...state, isFetching: false, };
    case clearStateAction()[STATES.FISH_DESCRIPTION]:
      return initialState;
    default:
      return state;
  }
};
