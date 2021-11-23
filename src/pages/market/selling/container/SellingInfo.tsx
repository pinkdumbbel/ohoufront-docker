import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Button, Col, Row, Tabs, Affix, Slider } from 'antd';
import './sellingInfo.css';
import SellingOption from '@/components/sellingOption/SellingOption';
import usePosition from '@/hooks/usePosition';
import { OptGroup } from 'rc-select';
import StickyHeader from '@/components/stickyHeader/stickyHeader';
import { Link } from 'react-router-dom';

interface SellingInfoProps {
  intersect?: number;
}

const SellingInfo: React.FC<SellingInfoProps> = () => {
  /* const tabsTitle = ['상품정보', '리뷰', '문의', '배송/환불']; */

  return (
    <>
      {/* <StickyHeader
        top={80}
        className="production-selling-navigation-wrap"
        childClassName="sticky-child production-selling-navigation"
      >
        <Tabs defaultActiveKey="1" className="production-selling-navigation-content">
          {tabsTitle.map((tab, i) => (
            <Tabs.TabPane tab={tab} key={i + 1} />
          ))}
        </Tabs>
      </StickyHeader> */}
      <div className="production-selling-navigation-wrap">
        <div className="production-selling-navigation" style={{ height: '50px' }}></div>
      </div>

      <div className="production-selling-detail-wrap container">
        <Row>
          <Col flex={0} className="production-selling-detail-content">
            <div className="production-selling-content">
              <div className="production-selling-description production-selling-description-notice production-selling-description-open">
                <ul className="production-selling-description-delivery-notice">
                  <li>
                    <b>배송까지</b>
                    <span className="red">최대 15일</span>
                    (주말과 공휴일 제외) 소요됩니다.
                  </li>
                  <li>고객주문 &gt; 주문확인 &gt; 상품준비(3~7일) &gt; 안내전화 &gt; 배송</li>
                  <li>주문확인 이후에는 구매 취소와 배송지 변경이 불가합니다.</li>
                </ul>

                <div className="production-selling-description-content">
                  <img alt="example" src="https://via.placeholder.com/692x600.png?text=detail1" />
                  <img alt="example" src="https://via.placeholder.com/692x600.png?text=detail2" />
                  <img alt="example" src="https://via.placeholder.com/692x600.png?text=detail3" />
                  <img alt="example" src="https://via.placeholder.com/692x600.png?text=detail4" />
                  <img alt="example" src="https://via.placeholder.com/692x600.png?text=detail5" />
                </div>
              </div>
            </div>
          </Col>
          <Col flex={0}>
            <div className="production-selling-sidebar-wrap">
              <Affix offsetTop={133}>
                <div className="production-selling-sidebar" style={{ height: `312px`, bottom: '652px' }}>
                  <section className="production-selling-sidebar-content">
                    <div className="production-selling-option-form production-selling-sidebar-content-option-form">
                      <section className="selling-option-form-content production-selling-option-form-form">
                        <SellingOption />
                      </section>
                      <div className="selling-option-form-content-price">
                        <span className="selling-option-form-content-price-left">주문금액</span>
                        <span className="selling-option-form-content-price-right">
                          <span className="selling-option-form-content-price-number">10,000</span>원
                        </span>
                      </div>

                      <div className="production-selling-option-form-footer">
                        <Link to="/order">
                          <Button size="large" className="button">
                            장바구니
                          </Button>
                        </Link>
                        <Link to="/order">
                          <Button size="large" type="primary">
                            바로구매
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </section>
                </div>
              </Affix>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SellingInfo;
