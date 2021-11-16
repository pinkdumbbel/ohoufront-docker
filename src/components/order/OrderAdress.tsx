import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import OrderPostCode from './OrderPostCode';
import Modal from '@/components/modal/Modal';
import { FieldData, SetFieldsStateAction } from '@/types/common';

interface OrderAdressProps {
  setFields?: SetFieldsStateAction<FieldData[]>;
}

const OrderAdress: React.FC<OrderAdressProps> = ({ setFields }) => {
  const [showPostCode, setShowPostCode] = useState(false);

  const onPostCode = () => {
    setShowPostCode(true);
  };

  return (
    <>
      <div className="order-adress-wrap">
        <div className="order-adress-zipcode-group">
          <div className="order-find-adress-btn">
            <Button type="primary" size="large" ghost onClick={onPostCode} className="order-find-adress-btn">
              주소찾기
            </Button>
          </div>
          <div className="order-zipcode">
            <Form.Item name="orderZipCode" noStyle>
              <Input size="large" disabled />
            </Form.Item>
          </div>
        </div>

        <div className="order-adress-input">
          <Form.Item name="orderAdress" noStyle>
            <Input size="large" disabled />
          </Form.Item>
        </div>

        <div className="order-detail-adress-input">
          <Form.Item name="orderDetailAdress" noStyle>
            <Input size="large" placeholder="상세 주소를 입력하세요" />
          </Form.Item>
        </div>
      </div>

      <Modal showModal={showPostCode} setShowPostCode={setShowPostCode}>
        <OrderPostCode setShowPostCode={setShowPostCode} setFields={setFields} />
      </Modal>
    </>
  );
};

export default OrderAdress;
