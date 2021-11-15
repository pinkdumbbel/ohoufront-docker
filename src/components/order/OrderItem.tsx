import React from 'react';
import OrderEmail from './OrderEmail';
import OrderPhone from './OrderPhone';
import { Form, Input } from 'antd';
import OrderAdress from './OrderAdress';
import { FieldData, SetFieldsStateAction } from '@/types/common';

interface OrderProps {
  subTitle: string;
  isEmail?: boolean;
  isPhone?: boolean;
  isAdress?: boolean;
  setFields?: SetFieldsStateAction<FieldData[]>;
}

const OrderItem: React.FC<OrderProps> = ({ children, isEmail, isPhone, isAdress, subTitle, setFields }) => {
  return (
    <div className="order-info-form-item">
      <div className="order-info-form-item-title">{subTitle}</div>
      <div className={`order-info-form-item-group ${(isEmail || isAdress) && 'order-info-form-item-full'}`}>
        {children}
        {isEmail && <OrderEmail />}
        {isPhone && <OrderPhone />}
        {isAdress && <OrderAdress setFields={setFields} />}
        {!isEmail && !isPhone && !isAdress && (
          <Form.Item name="orderName" noStyle>
            <Input size="large" />
          </Form.Item>
        )}
      </div>
    </div>
  );
};

OrderItem.defaultProps = {
  isEmail: false,
  isPhone: false,
  isAdress: false,
};

export default OrderItem;
