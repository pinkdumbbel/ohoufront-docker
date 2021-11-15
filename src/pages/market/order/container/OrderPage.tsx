import AppLayout from '@/components/appLayout/AppLayout';
import Order from '@/components/order/Order';
import React from 'react';
import './style.css';

const OrderPage: React.FC = () => {
  return (
    <AppLayout>
      <div className="order-main">
        <div className="oreder-content">
          <header className="order-header">주문/결제</header>
          <Order title="주문자" isOrderer />
          <Order title="배송지" isShipping />
        </div>
      </div>
    </AppLayout>
  );
};

export default OrderPage;
