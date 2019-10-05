import { getNewsListAction } from '../actionCreators';

export default (state = [], action) => {
  switch (action.type) {
    case getNewsListAction().SUCCESS:
      return { ...state, news: action.payload.articles, isFetching: false };
    case getNewsListAction().FAIL:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};
