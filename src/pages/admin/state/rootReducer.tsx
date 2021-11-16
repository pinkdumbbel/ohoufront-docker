import { combineReducers } from 'redux';
import userManage_Reducer from '@/pages/admin/userManage/state'; // 회원관리
import productManage_Reducer from '@/pages/admin/productManage/state'; // 상품관리

const rootReducerAdmin = combineReducers({
  userManage: userManage_Reducer,
  productManage: productManage_Reducer,
});

export default rootReducerAdmin;
