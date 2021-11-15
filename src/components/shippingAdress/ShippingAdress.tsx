import React from 'react';
import { Button, Form, Input } from 'antd';
import { phoneNumbers } from '@/utils/vars';
import SelectBox from '../selectBox/SelectBox';
import './style.css';
const ShippingAdress: React.FC = () => {
  return (
    <section className="orderer-wrap">
      <div className="orderer-header">
        <div className="orderer-title">배송지</div>
      </div>

      <Form initialValues={{ ordererPhoneFirst: '010' }}>
        <div className="orderer-content">
          <div className="orderer-info-form">
            <div className="orderer-info-form-item">
              <div className="orderer-info-form-item-title">받는사람</div>
              <div className="orderer-info-form-item-group">
                <Form.Item name="ordererName" noStyle>
                  <Input size="large" />
                </Form.Item>
              </div>
            </div>
          </div>

          <div className="orderer-info-form-item">
            <div className="orderer-info-form-item-title">연락처</div>
            <div className="orderer-info-form-item-group">
              <div className="orderer-phone-group">
                <div className="orderer-phone-first">
                  <SelectBox options={phoneNumbers} name="ordererPhoneFirst" />
                </div>
                <div className="orderer-phone-secont">
                  <Form.Item name="ordererEamilLocal" noStyle>
                    <Input size="large" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>

          <div className="orderer-info-form">
            <div className="orderer-info-form-item">
              <div className="orderer-info-form-item-title">주소</div>
              <div className="orderer-info-form-item-group shipping-adress-wrap">
                <div className="orderer-phone-group shipping-adress-group ">
                  <div className="shipping-adress-input-wrap">
                    <div className="orderer-phone-first">
                      <Button type="primary" size="large" ghost>
                        주소찾기
                      </Button>
                    </div>
                    <div className="orderer-phone-secont">
                      <Form.Item name="ordererEamilLocal" noStyle>
                        <Input size="large" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="shipping-adress-wrap">
                    <Form.Item name="ordererEamilLocal" noStyle>
                      <Input size="large" />
                    </Form.Item>
                  </div>
                  <div className="shipping-adress-wrap">
                    <Form.Item name="ordererEamilLocal" noStyle>
                      <Input size="large" />
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default ShippingAdress;
