import { combineReducers } from 'redux';
import category_Reducer from '@/pages/market/category/state/index'; // 카테고리

const rootReducerMarket = combineReducers({
  category: category_Reducer,
});

export default rootReducerMarket;
