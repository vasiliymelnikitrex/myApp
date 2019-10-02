import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsList } from '../redux/actions';
import { getNewsListSelector } from '../redux/selectors';

export default CustomComponent => props => {
  const news = useSelector(getNewsListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsList('REQUEST'));
  }, []);

  return news && <CustomComponent news={news} {...props} />;
};
