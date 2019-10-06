const spinner = () => next => action => next(action);

export default spinner;
/**
const spinner = store => next => action => {
  // TODO: Spinner dispatching
  return next(action);
}

export default spinner;

 */