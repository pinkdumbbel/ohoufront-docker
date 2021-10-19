import React from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './login.css';
import { DownloadOutlined } from '@ant-design/icons';
import OhousLogin from '@/common/svg/OhousLogin';

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className="login-page">
        <div className="login-wrapper">
          {/* <img className="login-logo" src="logo_login.png" alt="login-logo" width="150" height="50"/> */}
          <OhousLogin />
          <div className="login-form">
            <Form form={form} name="basic" size="large">
              <Form.Item name="username">
                <Input size="large" placeholder="이메일" style={{ width: 300 }} />
              </Form.Item>

              <Form.Item name="password">
                <Input.Password placeholder="비밀번호" style={{ width: 300 }} />
              </Form.Item>
            </Form>
            <Button
              style={{ marginTop: 20, marginBottom: 20, height: 50 }}
              size="large"
              block
              type="primary"
              htmlType="submit"
            >
              로그인
            </Button>
            <div className="login-form-sub">
              <Button type="text">비밀번호 재설정</Button>
              <Button type="text">회원가입</Button>
            </div>
          </div>
          <div className="sns-login">
            <div className="sns-login-text">SNS계정으로 간편 로그인/회원가입</div>
            <div className="sns-login-icon">
              <Button shape="circle" icon={<DownloadOutlined />} size="large" />
              <Button shape="circle" icon={<DownloadOutlined />} size="large" />
              <Button shape="circle" icon={<DownloadOutlined />} size="large" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
