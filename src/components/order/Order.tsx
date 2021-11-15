import React, { useState } from 'react';
import { Form } from 'antd';
import './style.css';
import OrderItem from './OrderItem';
import { FieldData } from '@/types/common';

interface OrderProps {
  isOrderer?: boolean;
  isShipping?: boolean;
  title: string;
}

const Order: React.FC<OrderProps> = ({ title, isOrderer, isShipping }) => {
  const [fields, setFields] = useState<FieldData[]>([{ name: '', value: '' }]);

  return (
    <section className="order-wrap">
      <div className="order-sub-header">
        <div className="order-title">{title}</div>
      </div>

      <Form fields={fields}>
        <div className="order-content">
          <div className="order-info-form">
            {isOrderer && (
              <>
                <OrderItem subTitle="이름" />
                <OrderItem subTitle="이메일" isEmail />
                <OrderItem subTitle="휴대전화" isPhone />
              </>
            )}
            {isShipping && (
              <>
                <OrderItem subTitle="받는 사람" />
                <OrderItem subTitle="연락처" isPhone />
                <OrderItem subTitle="배송지" isAdress setFields={setFields} />
              </>
            )}
          </div>
        </div>
      </Form>
    </section>
  );
};

Order.defaultProps = {
  isOrderer: false,
  isShipping: false,
};
export default Order;
