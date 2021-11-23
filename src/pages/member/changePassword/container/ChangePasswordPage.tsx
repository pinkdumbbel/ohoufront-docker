import AppLayout from '@/components/appLayout/AppLayout';
import React from 'react';
import { Form, Input, Button } from 'antd';
import { ChangePasswordFormData } from '@/types/changePassword';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { actions } from '../state';
import ChangePasswordFormItem from '@/components/changePasswordFormItem/ChangePasswordFormItem';
import './changePassword.css';
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
        <Form>
          <ChangePasswordFormItem title="새 비밀번호" subTitle={true}>
            <Form.Item
              name="password"
              extra="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
              rules={[
                {
                  required: true,
                  message: '비밀번호를 입력해주세요.',
                },
              ]}
            >
              <Input size="large" type="password" />
            </Form.Item>
          </ChangePasswordFormItem>
          <ChangePasswordFormItem title="새 비밀번호 확인" subTitle={true}>
            <Form.Item
              name="confirm"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: '비밀번호를 입력해주세요.',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('비밀번호가 일치하지 않습니다.'));
                  },
                }),
              ]}
            >
              <Input size="large" type="password" />
            </Form.Item>
          </ChangePasswordFormItem>
          <Button type="primary" size="large" onClick={changePasswordSubmit} block>
            비밀번호 변경
          </Button>
        </Form>
      </div>
    </AppLayout>
  );
};

export default ChangePasswordPage;
