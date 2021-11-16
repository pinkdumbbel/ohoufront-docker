import React from 'react';
import { Form, Select } from 'antd';

interface SelectBoxprops {
  options: string[];
  name: string;
  className?: string;
  defaultValue?: string;
}

const SelectBox: React.FC<SelectBoxprops> = ({ options, name, className = '', defaultValue }) => {
  return (
    <Form.Item name={name}>
      <Select size="large" className={className}>
        {options.map((option, i) => {
          console.log(option, i);
          return (
            <Select.Option key={option} value={i.toString()}>
              {option}
            </Select.Option>
          );
        })}
      </Select>
    </Form.Item>
  );
};

SelectBox.defaultProps = {
  defaultValue: '0',
};
export default SelectBox;
