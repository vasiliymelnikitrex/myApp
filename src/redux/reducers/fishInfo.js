import { getFishInfoAction } from '../actionCreators';

export default (state = {}, action) => {
  switch (action.type) {
    case getFishInfoAction().SUCCESS:
      return { ...state, ...action.payload, isFetching: false, };
    case getFishInfoAction().FAIL:
      return { ...state, isFetching: false, }; //TODO:
    default:
      return state;
  }
};
