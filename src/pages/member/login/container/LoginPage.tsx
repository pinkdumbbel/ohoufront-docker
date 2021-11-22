import React from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './login.css';
import OhousLogin from '@/components/svg/OhousLogin';
import { actions } from '../state';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import { AppDispatch } from '@/store/store';
import { LoginFormData } from '@/types/login';

const LoginPage: React.FC<RouteComponentProps> = (props) => {
  const [form] = Form.useForm<LoginFormData>();
  const dispatch = useDispatch<AppDispatch>();

  const loginSubmit = () => {
    const formData = form.getFieldsValue();
    dispatch(actions.fetchLogin(formData));
  };

  return (
    <>
      <div className="login-page">
        <div className="login-wrapper">
          <OhousLogin />
          <div className="login-form">
            <Form form={form} name="basic" size="large" onFinish={loginSubmit}>
              <Form.Item
                className="login-input"
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: '이메일 형식이 유효하지 않습니다.',
                  },
                  {
                    required: true,
                    message: '이메일을 입력해주세요.',
                  },
                ]}
              >
                <Input size="large" placeholder="이메일" style={{ width: 300 }} />
              </Form.Item>

              <Form.Item className="login-input" name="password">
                <Input.Password placeholder="비밀번호" style={{ width: 300 }} />
              </Form.Item>
              <Button
                style={{ marginTop: 20, marginBottom: 20, height: 50 }}
                size="large"
                block
                type="primary"
                htmlType="submit"
              >
                로그인
              </Button>
            </Form>
            <div className="login-form-sub">
              <Button type="text">비밀번호 재설정</Button>
              <Button type="text">
                <NavLink to="/signUp" activeClassName="login-link">
                  회원가입
                </NavLink>
              </Button>
            </div>
          </div>
          <div className="sns-login">
            <div className="sns-wrapper">
              <div className="sns-login-title">SNS계정으로 간편하게 회원가입</div>
              <ul className="sns-list">
                <li className="sns-item">
                  <Button
                    style={{ backgroundColor: '#3b5998', color: '#ffffff' }}
                    shape="circle"
                    icon={<>F</>}
                    size="large"
                  />
                </li>
                <li className="sns-item">
                  <Button style={{ backgroundColor: '#fef01b' }} shape="circle" icon={<>N</>} size="large" />
                </li>
                <li className="sns-item">
                  <Button
                    style={{ backgroundColor: '#2DB400', color: '#ffffff' }}
                    shape="circle"
                    icon={<>K</>}
                    size="large"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
