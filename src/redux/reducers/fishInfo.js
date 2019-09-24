import { getFishInfoAction } from '../actionCreators';

export default (state = {}, action) => {
  switch (action.type) {
    case getFishInfoAction().SUCCESS:
      return { ...state, ...action.payload };
    case getFishInfoAction().ERROR:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
