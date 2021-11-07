import AppLayout from '@/common/appLayout/AppLayout';
import React from 'react';
import { Form, Input, Button } from 'antd';
import './style.css';
import { ChangePasswordFormData } from '@/types/changePassword';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { actions } from '../state';

const ChangePasswordPage: React.FC = () => {
  const [form] = Form.useForm<ChangePasswordFormData>();
  const dispatch = useDispatch<AppDispatch>();

  const changePasswordSubmit = () => {
    const formData = form.getFieldsValue();
    console.log('formData', formData);
    dispatch(actions.changePasswordSubmit(formData));
  };

  return (
    <AppLayout>
      <div className="update-passowrd-wrap">
        <h1 className="update-password-title">비밀번호변경</h1>
        <Form form={form}>
          <div className="update-password-section">
            <div className="update-password-section-title">새 비밀번호</div>
            <div className="update-password-section-sub-title">
              영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
            </div>
            <div className="expert-form-group">
              <div className="expert-form-group-content">
                <div className="expert-form-group__input">
                  <Form.Item name="password">
                    <Input size="large" type="password" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>

          <div className="update-password-section">
            <div className="update-password-section-title">새 비밀번호 확인</div>
            <div className="expert-form-group">
              <div className="expert-form-group-content">
                <div className="expert-form-group__input">
                  <Form.Item name="password_confirm">
                    <Input size="large" type="password" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>

          <Button type="primary" size="large" onClick={changePasswordSubmit} block>
            비밀번호 변경
          </Button>
        </Form>
      </div>
    </AppLayout>
  );
};

export default ChangePasswordPage;
