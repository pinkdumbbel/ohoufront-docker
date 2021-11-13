import React from 'react';
import './style.css';

interface MyPageFormItemProps {
  title: string;
  required?: boolean;
}

const MyPageFormItem: React.FC<MyPageFormItemProps> = ({ children, title, required = false }) => {
  return (
    <div className="edit-user-info-form-item">
      <div className="edit-user-info-form-item-title">
        {title}
        {required && <div className="edit-user-info-form-item-title-require"> * 필수항목</div>}
      </div>

      <div className="edit-user-info-form-item-group expert-form-group">
        <div className="expert-form-group-content">
          <div className="expert-form-group-input">
            <div className="edit-user-info-form-item-field">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageFormItem;
