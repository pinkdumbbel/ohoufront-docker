import React from 'react';
import SelectBox from '../selectBox/SelectBox';
import { Form, Input } from 'antd';
import { phoneNumbers } from '@/utils/vars';

const OrderPhone: React.FC = () => {
  return (
    <div className="order-phone-group">
      <div className="order-phone-first">
        <SelectBox options={phoneNumbers} name="orderPhoneFirst" />
      </div>
      <div className="order-phone-second">
        <Form.Item name="orderEamilLocal" noStyle>
          <Input size="large" />
        </Form.Item>
      </div>
    </div>
  );
};

export default OrderPhone;
