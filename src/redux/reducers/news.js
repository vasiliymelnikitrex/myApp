import { getNewsListAction } from '../actionCreators';

export default (state = { isFetching: false }, action) => {
  switch (action.type) {
    case getNewsListAction().REQUEST:
      return { ...state, isFetching: true };
    case getNewsListAction().SUCCESS:
      return { ...state, news: action.payload.articles, isFetching: false };
    case getNewsListAction().FAIL:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};
