import { combineReducers } from '@reduxjs/toolkit';

// recucers
import rootReducerMember from '../pages/member/state/rootReducer';
import rootReducerMarket from '../pages/market/state/rootReducer';
import rootReducerAdmin from '../pages/admin/state/rootReducer';

export const rootReducer = combineReducers({
  member: rootReducerMember,
  market: rootReducerMarket,
  admin: rootReducerAdmin,
});
