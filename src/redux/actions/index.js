import {
  getFishListAction,
  getFishInfoAction,
  getNewsListAction,
  clearStateAction,
} from '../actionCreators';

export const getFishList = (type, payload) => ({
  type: getFishListAction()[type],
  ...(payload && { payload }),
});

export const getFishInfo = (type, payload) => ({
  type: getFishInfoAction()[type],
  ...(payload && { payload }),
});

export const getNews = (type, payload) => ({
  type: getNewsListAction()[type],
  ...(payload && { payload }),
});

export const clearState = type => ({
  type: clearStateAction()[type],
});