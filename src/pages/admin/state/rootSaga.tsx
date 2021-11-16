import { watchUnsplach as userManage_watchUnsplach } from '@/pages/admin/userManage/state/saga'; // 회원관리
import { watchUnsplach as productManage_watchUnsplach } from '@/pages/admin/productManage/state/saga'; // 상품관리

export const rootSagaAdmin = [userManage_watchUnsplach(), productManage_watchUnsplach()];
