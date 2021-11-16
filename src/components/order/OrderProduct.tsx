import React from 'react';

const OrderProduct: React.FC = () => {
  return (
    <div className="order-product-wrap">
      <div className="order-product-headercontainer">
        <div className="order-product-header-content">
          <div className="order-product-header-name">업체명</div>
          <div className="order-product-header-delivery">배송비</div>
        </div>
      </div>

      <div className="order-product-content">
        <div className="order-product-img-wrap">
          <img
            className="order-product-img-content"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            alt="example"
          />
        </div>

        <div className="order-product-explain">
          <div className="order-product-name">상품명</div>
          <div className="order-product-footer">
            <span className="order-product-price">상품가격</span>
            <div className="order-product-divider"></div>
            <span className="order-product-count">10개</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
