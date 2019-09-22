import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFishList } from '../redux/actions';
import { getFishListSelector } from '../redux/selectors';

export default CustomComponent => props => {
  const fishes = useSelector(getFishListSelector);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getFishList('REQUEST'));
  }, []);

  return fishes && <CustomComponent fishes={fishes} {...props} />;
};
