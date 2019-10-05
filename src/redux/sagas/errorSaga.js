import { put, takeEvery } from 'redux-saga/effects';
import {
  getNewsListAction,
  getFishListAction,
  getFishInfoAction,
} from '../actionCreators';

function* handleError({ errData }) {
  yield errData.handler('error', 'Sorry!', errData.message);
  yield put({
    type: errData.action.FAIL,
  });
}

export default [
  takeEvery(getNewsListAction().ERROR, handleError),
  takeEvery(getFishListAction().ERROR, handleError),
  takeEvery(getFishInfoAction().ERROR, handleError),
];
