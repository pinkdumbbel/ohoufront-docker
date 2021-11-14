import React from 'react';
import { Form, Input, Select } from 'antd';
import './style.css';
import { emails, phoneNumbers } from '@/utils/vars';
import SelectBox from '../selectBox/SelectBox';
const Orderer: React.FC = () => {
  return (
    <section className="orderer-wrap">
      <div className="orderer-header">
        <div className="orderer-title">주문자</div>
      </div>

      <Form initialValues={{ ordererPhoneFirst: '010' }}>
        <div className="orderer-content">
          <div className="orderer-info-form">
            <div className="orderer-info-form-item">
              <div className="orderer-info-form-item-title">이름</div>
              <div className="orderer-info-form-item-group">
                <Form.Item name="ordererName" noStyle>
                  <Input size="large" />
                </Form.Item>
              </div>
            </div>

            <div className="orderer-info-form-item">
              <div className="orderer-info-form-item-title">이메일</div>
              <div className="orderer-info-form-item-group order-info-form-item-email">
                <div className="orderer-email-group orderer-email-local-group">
                  <div className="orderer-email-local">
                    <Form.Item name="ordererEamilLocal" noStyle>
                      <Input size="large" />
                    </Form.Item>
                  </div>
                  <span className="orderer-email-seperator">@</span>
                </div>

                <div className="orderer-email-domain-wrap">
                  <div className="orderer-email-group">
                    <SelectBox options={emails} name="ordererEmailDomain" />
                  </div>
                </div>
              </div>
            </div>

            <div className="orderer-info-form-item">
              <div className="orderer-info-form-item-title">휴대전화</div>
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
          </div>
        </div>
      </Form>
    </section>
  );
};

export default Orderer;
