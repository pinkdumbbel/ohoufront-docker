import React, { useState } from 'react';
import { Form } from 'antd';
import './style.css';
import OrderItem from './OrderItem';
import { FieldData, SetFieldsStateAction } from '@/types/common';
import SelectBox from '../selectBox/SelectBox';
import { orderRequests } from '@/utils/vars';
import OrderProduct from './OrderProduct';
import OrderPayment from './OrderPayment';

interface OrderProps {
  isOrderer?: boolean;
  isShipping?: boolean;
  isProduct?: boolean;
  isPayment?: boolean;
  title: string;
  setFields?: SetFieldsStateAction<FieldData[]>;
}

const Order: React.FC<OrderProps> = ({ title, isOrderer, isShipping, isProduct, isPayment, setFields }) => {
  return (
    <section className="order-wrap">
      <div className="order-sub-header">
        <div className="order-title">{title}</div>
      </div>

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
              <div className="order-adress-request">
                <div className="order-adress-request-content">
                  <SelectBox options={orderRequests} name="orderRequest" />
                </div>
              </div>
            </>
          )}
          {isProduct && <OrderProduct />}
          {isPayment && <OrderPayment />}
        </div>
      </div>
    </section>
  );
};

Order.defaultProps = {
  isOrderer: false,
  isShipping: false,
  isProduct: false,
  isPayment: false,
};
export default Order;
