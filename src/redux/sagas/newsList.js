import { call, put, takeLatest } from 'redux-saga/effects';
import { getNewsListAction } from '../actionCreators';
import client from '../../api-client';

function* getNewsList() {
  try {
    const response = yield call(client.news.getNewsData);

    yield put({
      type: getNewsListAction().SUCCESS,
      payload: response,
    });
  } catch (err) {
    yield put({
      type: getNewsListAction().ERROR,
      payload: err,
    });
  }
}

// TODO: saga for error handling

export default [
  takeLatest(getNewsListAction().REQUEST, getNewsList),
];
