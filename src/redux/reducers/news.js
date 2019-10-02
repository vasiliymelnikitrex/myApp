import { getNewsListAction } from '../actionCreators';

export default (state = [], action) => {
  switch (action.type) {
    case getNewsListAction().SUCCESS:
      return [...state, ...action.payload.articles];
    case getNewsListAction().ERROR:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
