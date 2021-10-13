import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from './state';
import { decrement, increment } from './state/slice/counter';

function App(): JSX.Element {
  const count = useSelector((state: ReducerType) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>count is {count}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
