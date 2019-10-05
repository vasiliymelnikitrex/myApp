import { call, put, takeLatest } from 'redux-saga/effects';
import { getFishListAction, getFishInfoAction } from '../actionCreators';
import client from '../../api-client';

function* getFishList() {
  try {
    const response = yield call(client.fishes.getFishData);

    yield put({
      type: getFishListAction().SUCCESS,
      payload: response,
    });
  } catch (err) {
    yield put({
      type: getFishListAction().ERROR,
      payload: err,
    });
  }
}

function* getFishDescription({ payload }) {
  try {
    const response = yield call(
      client.fishDescription.getFishDescription,
      payload,
    );
    yield put({
      type: getFishInfoAction().SUCCESS,
      payload: response,
    });
  } catch (err) {
    yield put({
      type: getFishInfoAction().ERROR,
      payload: err,
    });
  }
}

export default [
  takeLatest(getFishListAction().REQUEST, getFishList),
  takeLatest(getFishInfoAction().REQUEST, getFishDescription),
];

/**
 * import { call, put, takeLatest } from 'redux-saga/effects';
import { getNewsListAction } from '../actionCreators';
import client from '../../api-client';

function* getNewsList({ payload }) {
  try {
    const response = yield call(client.news.getNewsData);
    if (response.status === 'error') {
      yield put({
        type: getNewsListAction().ERROR,
        errData: {
          message: response.message,
          handler: payload,
          action: getNewsListAction()
        },
      });
    }
    yield put({
      type: getNewsListAction().SUCCESS,
      payload: response,
    });
  } catch (err) {
    yield put({
      type: getNewsListAction().ERROR,
      errData: {
        message: err.message, // TODO:
        handler: payload,
        action: getNewsListAction()
      },
    });
  }
}

export default [takeLatest(getNewsListAction().REQUEST, getNewsList)];

 */