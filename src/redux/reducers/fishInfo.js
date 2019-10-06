import { getFishInfoAction } from '../actionCreators';

export default (state = { isFetching: false }, action) => {
  switch (action.type) {
    case getFishInfoAction().REQUEST:
      return { ...state, isFetching: true, };
    case getFishInfoAction().SUCCESS:
      return { ...state, ...action.payload[0], isFetching: false, };
    case getFishInfoAction().FAIL:
      return { ...state, isFetching: false, };
    default:
      return state;
  }
};
