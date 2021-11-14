import AppLayout from '@/components/appLayout/AppLayout';
import Orderer from '@/components/orderer/Orderer';
import React from 'react';
import './style.css';

const OrderPage: React.FC = () => {
  return (
    <AppLayout>
      <div className="order-main">
        <div className="oreder-content">
          <header className="order-header">주문/결제</header>
          <Orderer />
        </div>
      </div>
    </AppLayout>
  );
};

export default OrderPage;
