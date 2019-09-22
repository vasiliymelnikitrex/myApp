import { getFishListAction } from '../actionCreators';

export const getFishList = (type, payload) => ({
  type: getFishListAction()[type],
  ...(payload && { payload }),
});
