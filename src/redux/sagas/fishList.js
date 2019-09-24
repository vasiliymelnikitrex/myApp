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

// TODO: saga for error handling

export default [
  takeLatest(getFishListAction().REQUEST, getFishList),
  takeLatest(getFishInfoAction().REQUEST, getFishDescription),
];
