import { put, takeEvery } from 'redux-saga/effects';
import {
  getNewsListAction,
  getFishListAction,
  getFishDescriptionAction,
} from '../actionCreators';

function* handleError({ errData }) {
  yield errData.handler('error', 'Sorry!', errData.message); // TODO: messages
  yield put({
    type: errData.action.FAIL,
  });
}

export default [
  takeEvery(getNewsListAction().ERROR, handleError),
  takeEvery(getFishListAction().ERROR, handleError),
  takeEvery(getFishDescriptionAction().ERROR, handleError),
];
