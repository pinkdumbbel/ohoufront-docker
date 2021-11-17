import React from 'react';
import { Button } from 'antd';

const OrderPaymentSticky: React.FC = () => {
  return (
    <section className="order-payment-sticky-main">
      <div className="sticky-container">
        <div className="sticky-child">
          <div className="order-payment-sticky-content-wrap">
            <div className="order-payment-sticky-content">
              <div className="order-payment-sticky-content-inner">
                <div className="order-payment-sticky-content-header">결제금액</div>
                <div className="order-payment-sticky-content-item">
                  <div className="order-payment-sticky-content-item-title">총 상품 금액</div>
                  <div className="order-payment-sticky-content-item-price product-total-price">100원</div>
                </div>
                <div className="order-payment-sticky-content-item">
                  <div className="order-payment-sticky-content-item-title">배송비</div>
                  <div className="order-payment-sticky-content-item-price ">0원</div>
                </div>

                <div className="order-payment-sticky-content-footer">
                  <div className="order-payment-total-title">최종 결제 금액</div>
                  <div className="order-payment-total-price">
                    <span className="number">100</span>
                    &nbsp;원
                  </div>
                </div>
              </div>
            </div>

            <Button type="primary" size="large" className="order-total-payment-btn">
              100원 결제하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPaymentSticky;
