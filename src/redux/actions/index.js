import {
  getFishListAction,
  getFishDescriptionAction,
  getNewsListAction,
  clearStateAction,
} from '../actionCreators';

export const getFishList = (type, payload) => ({
  type: getFishListAction()[type],
  ...(payload && { payload }),
});

export const getFishDescription = (type, ...payload) => ({
  type: getFishDescriptionAction()[type],
  ...(payload && { payload }),
});

export const getNews = (type, payload) => ({
  type: getNewsListAction()[type],
  ...(payload && { payload }),
});

export const clearState = type => ({
  type: clearStateAction()[type],
});