import { STATES } from '../../constants';

export const getFishListAction = () => ({
  REQUEST: 'GET_FISH_LIST_REQUEST',
  SUCCESS: 'GET_FISH_LIST_SUCCESS',
  ERROR: 'GET_FISH_LIST_ERROR',
  FAIL: 'GET_FISH_LIST_FAIL',
});

export const getFishDescriptionAction = () => ({
  REQUEST: 'GET_FISH_DESCRIPTION_REQUEST',
  SUCCESS: 'GET_FISH_DESCRIPTION_SUCCESS',
  ERROR: 'GET_FISH_DESCRIPTION_ERROR',
  FAIL: 'GET_FISH_DESCRIPTION_FAIL',
});

export const getNewsListAction = () => ({
  REQUEST: 'GET_NEWS_LIST_REQUEST',
  SUCCESS: 'GET_NEWS_LIST_SUCCESS',
  ERROR: 'GET_NEWS_LIST_ERROR',
  FAIL: 'GET_NEWS_LIST_FAIL',
});

export const clearStateAction = () => ({
  [STATES.FISH_DESCRIPTION]: STATES.FISH_DESCRIPTION,
});
