import React from 'react';
import { Button, Form, Input } from 'antd';

interface ChangePasswordFormItemProps {
  title: string;
  subTitle?: boolean;
}

const ChangePasswordFormItem: React.FC<ChangePasswordFormItemProps> = ({ children, title, subTitle = false }) => {
  return (
    <div className="update-password-section">
      <div className="update-password-section-title">{title}</div>
      {subTitle && (
        <div className="update-password-section-sub-title">영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</div>
      )}
      <div className="expert-form-group">
        <div className="expert-form-group-content">
          <div className="expert-form-group-input">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordFormItem;
