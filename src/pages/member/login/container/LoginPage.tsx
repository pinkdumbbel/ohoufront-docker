import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './login.css';
import OhousLogin from '@/common/svg/OhousLogin';
import { actions, getState } from '../state';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import { AppDispatch, RootState } from '@/store/store';
import { LoginFormData } from '@/types/login';
import { LocationState } from '@/types/common';

const LoginPage: React.FC<RouteComponentProps> = (props) => {
  const [form] = Form.useForm<LoginFormData>();
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: '/' } };
  const certifyYn = useSelector((state: RootState) => getState(state).certifyYn);

  useEffect(() => {
    console.log('certifyYn', certifyYn);
    if (certifyYn) {
      let newPath = { pathname: '/main' };
      if (from.pathname !== '/') {
        newPath = from;
      }
      console.log('newPath', newPath);
      props.history.push(newPath);
    }
  }, [certifyYn]);

  const loginSubmit = () => {
    const formData = form.getFieldsValue();
    console.log('formData', formData);
    dispatch(actions.fetchLogin(formData));
  };

  return (
    <>
      <div className="login-page">
        <div className="login-wrapper">
          <OhousLogin />
          <div className="login-form">
            <Form form={form} name="basic" size="large">
              <Form.Item name="email">
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
              onClick={loginSubmit}
            >
              로그인
            </Button>
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
