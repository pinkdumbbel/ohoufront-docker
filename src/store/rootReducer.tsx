import { combineReducers } from '@reduxjs/toolkit';

// recucers
import rootReducerMember from '../pages/member/state/rootReducer';

export const rootReducer = combineReducers({
  member: rootReducerMember,
})