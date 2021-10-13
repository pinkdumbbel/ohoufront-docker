import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counter from './slice/counter';

const reducer = combineReducers({
  counter,
});

const store = configureStore({ reducer });

export type ReducerType = ReturnType<typeof reducer>;
export default store;
