import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getFishListAction,
  getFishDescriptionAction,
} from '../actionCreators';
import client from '../../api-client';

function* getFishList({ payload }) {
  try {
    const response = yield call(client.fishes.getFishData);

    yield put({
      type: getFishListAction().SUCCESS,
      payload: response,
    });
  } catch (err) {
    yield put({
      type: getFishListAction().ERROR,
      errData: {
        message: err.message,
        handler: payload,
        action: getFishListAction(),
      },
    });
  }
}

function* getFishDescription({ payload }) {
  const [alertWithType, path] = payload;

  try {
    const response = yield call(
      client.fishDescription.getFishDescription,
      path,
    );

    yield put({
      type: getFishDescriptionAction().SUCCESS,
      payload: response,
    });
  } catch (err) {
    yield put({
      type: getFishDescriptionAction().ERROR,
      errData: {
        message: "Can't get data from the url", // TODO: Error urls
        handler: alertWithType,
        action: getFishDescriptionAction(),
      },
    });
  }
}

export default [
  takeLatest(getFishListAction().REQUEST, getFishList),
  takeLatest(getFishDescriptionAction().REQUEST, getFishDescription),
];
