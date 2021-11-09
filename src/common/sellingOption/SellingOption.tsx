import React from 'react';
import { Form, Select } from 'antd';
import './style.css';

const SellingOption: React.FC = () => {
  const quantity = Array(5)
    .fill(0)
    .map((_, i) => {
      return i === 4 ? i + 1 + '+' : i + 1;
    });
  return (
    <ul className="selling-option-form-content-list">
      <li>
        <article className="selling-option-item">
          <h1 className="selling-option-item-production">뉴 레가토 3인/4인 리클라이너 소파 3colors</h1>
          <div className="selling-option-item-controls">
            <div className="selling-option-item-quantity">
              <Form>
                <Form.Item name="quantity" initialValue="1">
                  <Select className="selling-option-item-quantity" size="small">
                    {quantity.map((v) => (
                      <Select.Option key={v} value={v} style={{ textAlign: 'center' }}>
                        {v}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Form>
            </div>
            <div className="selling-option-item-price">
              <span>10,000</span>원
            </div>
          </div>
        </article>
      </li>
    </ul>
  );
};

export default SellingOption;
