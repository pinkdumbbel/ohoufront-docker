import React from 'react';
import { Col, Row, Carousel, Card, Rate, Button } from 'antd';
import Entry from '@/common/svg/Entry';
import './sellingForm.css';
import SellingOption from '@/common/sellingOption/SellingOption';

const SellingForm: React.FC = () => {
  const categorys = ['가구 ', '소파/거실가구 ', '리클라이너 소파 '];
  return (
    <div className="production-selling-overview container">
      <nav className="commerce-category-breadcrumb-wrap production-selling-overview-category">
        <ol className="commerce-category-breadcrumb">
          {categorys.map((category, i) => {
            return (
              <li className="commerce-category-breadcrumb-entry" key={category}>
                {category}
                {i < categorys.length - 1 && <Entry />}
              </li>
            );
          })}
        </ol>
      </nav>
      <div className="production-selling-overview-container row">
        <Row wrap>
          <Col flex={3} className="production-selling-overview-cover-image-wrap">
            <div className="production-selling-cover-image-container">
              <div className="carousel-list-wrap production-selling-cover-image-carousel-wrap">
                <Carousel swipeToSlide draggable dots={false}>
                  <div className="carousel-list-entry production-selling-cover-image-entry">
                    <img
                      className="production-selling-cover-image-entry-image"
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  </div>
                  <div className="carousel-list-entry production-selling-cover-image-entry">
                    <img
                      className="production-selling-cover-image-entry-image"
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  </div>
                  <div className="carousel-list-entry production-selling-cover-image-entry">
                    <img
                      className="production-selling-cover-image-entry-image"
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  </div>
                  <div className="carousel-list-entry production-selling-cover-image-entry">
                    <img
                      className="production-selling-cover-image-entry-image"
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  </div>
                </Carousel>
              </div>

              <ul className="production-selling-cover-image-list">
                <li className="production-selling-cover-image-list-item">
                  <Card
                    hoverable
                    className="production-selling-cover-image-list-btn"
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  />
                </li>
                <li className="production-selling-cover-image-list-item">
                  <Card
                    hoverable
                    className="production-selling-cover-image-list-btn"
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  />
                </li>
                <li className="production-selling-cover-image-list-item">
                  <Card
                    hoverable
                    className="production-selling-cover-image-list-btn"
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  />
                </li>
              </ul>
            </div>
          </Col>

          <Col flex={2} className="production-selling-overview-content">
            <div className="production-selling-header">
              <h1 className="production-selling-header-title">
                <div className="production-selling-header-title-name-wrap">
                  <span className="production-selling-header-title-name">
                    뉴 레가토 3인/4인 리클라이너 소파 3colors
                  </span>
                </div>
              </h1>

              <div className="production-selling-header-content production-selling-header-content-deal">
                <div className="production-selling-header-review-wrap">
                  <Rate allowHalf defaultValue={4.5} disabled style={{ color: '#35c5f0' }} />
                  <span className="production-selling-header-review-text">264개 리뷰</span>
                </div>
                <div className="production-selling-header-price">
                  <span className="production-selling-header-price-price-wrap">
                    <span className="production-selling-header-price-price">
                      <span className="number">10,000</span>
                      <span className="won">원</span>
                    </span>
                  </span>
                </div>
              </div>

              <div className="production-selling-header-info-wrap">
                <div className="production-selling-header-delivery">
                  <div className="production-selling-header-delivery-title-wrap">
                    <span>배송</span>
                  </div>
                  <div className="production-selling-header-delivery-content-wrap">
                    <span className="production-selling-header-delivery-type">배송 상품정보 참고</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="production-selling-option-form production-selling-overview-option-form">
              <div className="selling-option-form-content production-selling-option-form-form">
                <SellingOption />
                <div className="selling-option-form-content-price">
                  <span className="selling-option-form-content-price-left">주문금액</span>
                  <span className="selling-option-form-content-price-right">
                    <span className="selling-option-form-content-price-number">10,000</span>원
                  </span>
                </div>
              </div>

              <div className="production-selling-option-form-footer">
                <Button size="large" className="button">
                  장바구니
                </Button>
                <Button size="large" type="primary">
                  바로구매
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SellingForm;
