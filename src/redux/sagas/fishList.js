import { call, put, takeLatest } from 'redux-saga/effects';
import { getFishListAction } from '../actionCreators';
import client from '../../api-client';


function* getFishList() {
  try {
    const response = yield call(client.fishes.getFishesList);

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

// TODO: saga for error handling

export default [takeLatest(getFishListAction().REQUEST, getFishList)];