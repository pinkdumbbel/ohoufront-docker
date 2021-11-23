import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './signUp.css';
import OhousLogin from '@/components/svg/OhousLogin';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actions, getState } from '../state';
import { RouteComponentProps } from 'react-router';
import { AppDispatch, RootState } from '@/store/store';
import { SignUpFormData } from '@/types/signUp';

const SignUpPage: React.FC<RouteComponentProps> = (props) => {
  const [form] = Form.useForm<SignUpFormData>();
  const dispatch = useDispatch<AppDispatch>();
  const isSignedUp = useSelector((state: RootState) => getState(state).isSignedUp);

  useEffect(() => {
    if (isSignedUp) {
      const newPath = { pathname: '/' };
      props.history.push(newPath);
    }
    //eslint-disable-next-line
  }, [isSignedUp]);

  const signUpSubmit = () => {
    const formData = form.getFieldsValue();
    dispatch(actions.signUpSubmit(formData));
  };

  return (
    <>
      <div className="signup-page">
        <a href="/">
          <OhousLogin />
        </a>
        <div className="signup-wrapper">
          <h1 className="signup-title">회원가입</h1>
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
          <Form
            form={form}
            onFinish={signUpSubmit}
            name="basic"
            size="large"
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 16 }}
          >
            <Form.Item
              className="signup-input"
              label="이메일"
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
              <Input size="large" placeholder="이메일" />
            </Form.Item>
            <Form.Item
              className="signup-input"
              label="비밀번호"
              name="password"
              extra="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요."
              rules={[
                {
                  required: true,
                  message: '비밀번호를 입력해주세요.',
                },
              ]}
            >
              <Input placeholder="비밀번호" />
            </Form.Item>
            <Form.Item
              className="signup-input"
              label="비밀번호확인"
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
              <Input placeholder="비밀번호 확인" />
            </Form.Item>
            <Form.Item
              className="signup-input"
              label="닉네임"
              name="nickName"
              extra="다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)"
            >
              <Input placeholder="별명 (2~15자)" />
            </Form.Item>
            <Button size="large" block type="primary" htmlType="submit">
              회원가입하기
            </Button>
          </Form>
          <p className="signup-bottom-message">
            이미 아이디가 있으신가요?
            <NavLink to="/login" activeClassName="login-link">
              로그인
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
