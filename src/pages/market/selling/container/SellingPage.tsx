import React from 'react';
import AppLayout from '@/common/appLayout/AppLayout';
import './style.css';
import Entry from '@/common/svg/Entry';
import { Row, Col, Carousel } from 'antd';
const SellingPage: React.FC = () => {
  const categorys = ['가구', '소파/거실가구', '리클라이너 소파'];

  return (
    <AppLayout>
      <div className="production-selling">
        <div className="production-selling-overview container">
          <nav className="production-selling-overview-category commerce-category-breadcrumb-wrap">
            <ol className="commerce-category-breadcrumb">
              {categorys.map((category, i) => {
                return (
                  <li className="commerce-category-breadcrumb-entry">
                    {category}
                    {i < categorys.length - 1 && <Entry />}
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="production-selling-overview-container row">
            <div className="production-selling-overview-cover-image-wrap">
              <Row>
                <Col lg={14} className="production-selling-overview-cover-image-wrap">
                  <div className="production-selling-cover-image-container">
                    <div className="carousel production-selling-cover-image production-selling-overview-cover-image">
                      <div className="carousel-list-wrap production-selling-cover-image-carousel-wrap">
                        {/* <Carousel>
                          <div>
                            <h3>1</h3>
                          </div>
                          <div>
                            <h3>2</h3>
                          </div>
                          <div>
                            <h3>3</h3>
                          </div>
                        </Carousel> */}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={10}>22</Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SellingPage;
