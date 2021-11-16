import { cards } from '@/utils/vars';
import { BankOutlined, CreditCardOutlined, MobileOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useRef } from 'react';
import SelectBox from '../selectBox/SelectBox';

const OrderPayment: React.FC = () => {
  const selectRef = useRef<HTMLDivElement>(null);

  const onPayment = (payment: 'card' | 'account' | 'mobile') => {
    if (selectRef.current) {
      if (payment === 'card') {
        selectRef.current.style.display = 'block';
      } else {
        selectRef.current.style.display = 'none';
      }
    }
  };

  return (
    <>
      <div className="order-payment-list">
        <Button
          icon={<CreditCardOutlined className="order-payment-icon" />}
          className="order-payment-btn"
          onClick={() => onPayment('card')}
        >
          <div className="order-payment-text">카드</div>
        </Button>
        <Button
          icon={<BankOutlined className="order-payment-icon" />}
          className="order-payment-btn"
          onClick={() => onPayment('account')}
        >
          <div className="order-payment-text">무통장입금</div>
        </Button>
        <Button
          icon={<MobileOutlined className="order-payment-icon" />}
          className="order-payment-btn"
          onClick={() => onPayment('mobile')}
        >
          <div className="order-payment-text">핸드폰</div>
        </Button>
      </div>
      <div ref={selectRef} className="order-payment-card-select">
        <SelectBox options={cards} name="" />
      </div>
    </>
  );
};

export default OrderPayment;
