import { getFishListAction } from '../actionCreators';

export default (state = [], action) => {
  switch (action.type) {
    case getFishListAction().SUCCESS:
      return [...state, ...action.payload];
    case getFishListAction().ERROR:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
