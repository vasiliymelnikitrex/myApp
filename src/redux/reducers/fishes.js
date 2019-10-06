import { getFishListAction } from '../actionCreators';

export default (state = { isFetching: false }, action) => {
  switch (action.type) {
    case getFishListAction().REQUEST:
      return { ...state, isFetching: true };
    case getFishListAction().SUCCESS:
      return { ...state, fishes: action.payload, isFetching: false };
    case getFishListAction().FAIL:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};
