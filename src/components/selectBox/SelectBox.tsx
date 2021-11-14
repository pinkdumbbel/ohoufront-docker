import React from 'react';
import { Form, Select } from 'antd';

interface SelectBoxprops {
  options: string[];
  name: string;
  className?: string;
}

const SelectBox: React.FC<SelectBoxprops> = ({ options, name, className = '' }) => {
  return (
    <Form.Item name={name}>
      <Select size="large" className={className}>
        {options.map((option) => (
          <Select.Option key={option} value={option}>
            {option}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SelectBox;
