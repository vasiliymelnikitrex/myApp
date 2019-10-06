import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getFishListAction,
  getFishInfoAction,
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
  try {
    const response = yield call(
      client.fishDescription.getFishDescription,
      payload.path,
    );

    yield put({
      type: getFishInfoAction().SUCCESS,
      payload: response,
    });
  } catch (err) {
    yield put({
      type: getFishInfoAction().ERROR,
      errData: {
        message: "Can't get data from the url", // TODO: Error urls
        handler: payload.alertWithType,
        action: getFishInfoAction(),
      },
    });
  }
}

export default [
  takeLatest(getFishListAction().REQUEST, getFishList),
  takeLatest(getFishInfoAction().REQUEST, getFishDescription),
];
