import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../redux/actions';
import * as selectors from '../redux/selectors';

export default CustomComponent => props => {
  const { alertWithType, path } = props;
  const data = useSelector(selectors[`get${CustomComponent.name}Selector`]);
  const isFetching = useSelector(selectors[`is${CustomComponent.name}FetchingSelector`]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions[`get${CustomComponent.name}`]('REQUEST', alertWithType, path));
  }, []);

  return <CustomComponent isFetching={isFetching} data={data} {...props} />;
};
