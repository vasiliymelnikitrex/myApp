import { call, put, takeLatest } from 'redux-saga/effects';
import { getNewsListAction } from '../actionCreators';
import client from '../../api-client';

function* getNewsList({ payload }) {
  try {
    const response = yield call(client.news.getNewsData);
    if (response.status !== 'ok') {
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
        message: err.message,
        handler: payload,
        action: getNewsListAction()
      },
    });
  }
}

export default [takeLatest(getNewsListAction().REQUEST, getNewsList)];
