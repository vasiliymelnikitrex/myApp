import fishList from './fishList';
import newsList from './newsList';
import errorSaga from './errorSaga';

export default [
  ...fishList,
  ...newsList,
  ...errorSaga,
];