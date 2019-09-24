import { getFishListAction, getFishInfoAction } from '../actionCreators';

export const getFishList = (type, payload) => ({
  type: getFishListAction()[type],
  ...(payload && { payload }),
});

export const getFishInfo = (type, payload) => ({
  type: getFishInfoAction()[type],
  ...(payload && { payload }),
});
