import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../redux/actions';
import * as selectors from '../redux/selectors';

export default CustomComponent => props => {
  const data = useSelector(selectors[`get${CustomComponent.name}Selector`]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions[`get${CustomComponent.name}`]('REQUEST', props.alertWithType));
  }, []);

  return <CustomComponent data={data} {...props} />;
};
