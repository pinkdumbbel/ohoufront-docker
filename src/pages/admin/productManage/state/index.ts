import { RootState } from '@/store/store';
import { ProductManageState } from '@/types/productManage';
import { createSlice } from '@reduxjs/toolkit';

const ROOT_SLICE_NAME = 'admin';
const SLICE_NAME = 'productManage';

const initialState: ProductManageState = {
  productList: [],
};

const sagaAction = {};

const reducers = {
  initState: () => initialState,
};

const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers,
});

export const getState = (state: RootState): ProductManageState => state[ROOT_SLICE_NAME][SLICE_NAME];
export const actions = {
  ...slice.actions,
  ...sagaAction,
};

export default slice.reducer;
