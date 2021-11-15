import React from 'react';
import { Form, Input } from 'antd';
import SelectBox from '../selectBox/SelectBox';
import { emails } from '@/utils/vars';

const OrderEmail: React.FC = () => {
  return (
    <>
      <div className="order-email-group order-email-local-group">
        <div className="order-email-local">
          <Form.Item name="orderEamilLocal" noStyle>
            <Input size="large" />
          </Form.Item>
        </div>
        <span className="order-email-seperator">@</span>
      </div>

      <div className="order-email-domain-wrap">
        <div className="order-email-group">
          <SelectBox options={emails} name="ordererEmailDomain" />
        </div>
      </div>
    </>
  );
};

export default OrderEmail;
