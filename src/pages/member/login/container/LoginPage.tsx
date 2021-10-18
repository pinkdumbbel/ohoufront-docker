import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './login.css'

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
        <div className="login-logo">로고</div>
        <div className="login-form">
          <Form
            form={form}
            name="basic"
            size="large"
          >
            <Form.Item
              name="username"
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              name="password"
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
          </Form>
        </div>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <div>
          <Button type="primary" htmlType="submit">
            비밀번호 재설정
          </Button>
          <Button type="primary" htmlType="submit">
            회원가입
          </Button>
        </div>
        <div>
          sns계정으로 간편 로그인/회원가입
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
