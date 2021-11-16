import AppLayout from '@/components/appLayout/AppLayout';
import Order from '@/components/order/Order';
import { FieldData } from '@/types/common';
import { Form } from 'antd';
import React, { useState } from 'react';
import './style.css';

const OrderPage: React.FC = () => {
  const [fields, setFields] = useState<FieldData[]>([{ name: '', value: '' }]);
  return (
    <AppLayout>
      <div className="order-main">
        <div className="oreder-content">
          <header className="order-header">주문/결제</header>
          <Form fields={fields}>
            <Order title="주문자" isOrderer />
            <Order title="배송지" isShipping setFields={setFields} />
            <Order title="주문상품" isProduct />
            <Order title="결제 수단" isPayment />
          </Form>
        </div>
      </div>
    </AppLayout>
  );
};

export default OrderPage;
