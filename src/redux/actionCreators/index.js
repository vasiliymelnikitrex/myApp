import { STATES } from '../../constants';

export const getFishListAction = () => ({
  REQUEST: 'GET_FISH_LIST_REQUEST',
  SUCCESS: 'GET_FISH_LIST_SUCCES',
  ERROR: 'GET_FISH_LIST_ERROR',
  FAIL: 'GET_FISH_LIST_FAIL',
});

export const getFishInfoAction = () => ({
  REQUEST: 'GET_FISH_INFO_REQUEST',
  SUCCESS: 'GET_FISH_INFO_SUCCES',
  ERROR: 'GET_FISH_INFO_ERROR',
  FAIL: 'GET_FISH_INFO_FAIL',
});

export const getNewsListAction = () => ({
  REQUEST: 'GET_NEWS_LIST_REQUEST',
  SUCCESS: 'GET_NEWS_LIST_SUCCES',
  ERROR: 'GET_NEWS_LIST_ERROR',
  FAIL: 'GET_NEWS_LIST_FAIL',
});

export const clearStateAction = () => ({
  [STATES.FISH_INFO]: STATES.FISH_INFO,
});
