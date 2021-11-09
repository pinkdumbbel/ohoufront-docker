import React, { useRef, useState } from 'react';
import { Button, Col, Row, Tabs } from 'antd';
import './sellingInfo.css';
import SellingOption from '@/common/sellingOption/SellingOption';

const SellingInfo: React.FC = () => {
  const tabsTitle = ['상품정보', '리뷰', '문의', '배송/환불'];
  const navRef = useRef<HTMLDivElement>(null);

  /* const [sidebarStyle, setSidebarStyle] = useState<React.CSSProperties>({
    position: 'relative',
    boxSizing: 'border-box',
    height: '200px',
  }); */

  return (
    <>
      <div ref={navRef}></div>
      <div className="sticky-container production-selling-navigation-wrap">
        <div className="sticky-child production-selling-navigation">
          <Tabs defaultActiveKey="1" className="production-selling-navigation-content">
            {tabsTitle.map((tab, i) => (
              <Tabs.TabPane tab={tab} key={i + 1} />
            ))}
          </Tabs>
        </div>
      </div>

      <div className="production-selling-detail-wrap container">
        <Row wrap>
          <Col flex={3} className="production-selling-detail-content">
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
                  <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                  <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
              </div>
            </div>
          </Col>
          <Col flex={2}>
            <div className="production-selling-sidebar-wrap" style={{}}>
              <div className="production-selling-sidebar" /* style={sidebarStyle} */>
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
                      <Button size="large" className="button">
                        장바구니
                      </Button>
                      <Button size="large" type="primary">
                        바로구매
                      </Button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SellingInfo;