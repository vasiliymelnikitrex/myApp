import { getFishListAction } from '../actionCreators';

export default (state = [], action) => {
  switch (action.type) {
    case getFishListAction().SUCCESS:
      return { ...state, fishes: action.payload, isFetching: false };
    case getFishListAction().FAIL:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};
