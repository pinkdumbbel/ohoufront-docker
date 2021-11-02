import { watchUnsplach as category_watchUnsplach } from '@/pages/market/category/state/saga'; // 카테고리

export const rootSagaMarket = [category_watchUnsplach()];
