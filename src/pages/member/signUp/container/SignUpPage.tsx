import React from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './signUp.css';
import OhousLogin from '@/common/svg/OhousLogin';
import { useDispatch } from 'react-redux';
import { actions } from '../state';

const SignUpPage: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const signUpSubmit = () => {
    const formData = form.getFieldsValue();
    console.log('formData', formData);
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
          <Form form={form} name="basic" size="large" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
            <Form.Item label="이메일" name="email" className="email-input">
              <Input size="large" placeholder="이메일" />
            </Form.Item>
            <Form.Item label="비밀번호" name="password" extra="영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.">
              <Input placeholder="비밀번호" />
            </Form.Item>
            <Form.Item label="비밀번호 확인" name="passwordConfirm">
              <Input placeholder="비밀번호 확인" />
            </Form.Item>
            <Form.Item label="닉네임" name="nickName" extra="다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)">
              <Input placeholder="별명 (2~15자)" />
            </Form.Item>
            <Button size="large" block type="primary" htmlType="submit" onClick={signUpSubmit}>
              회원가입하기
            </Button>
          </Form>
          <p className="signup-bottom-message">
            이미 아이디가 있으신가요?<a className="login-link">로그인</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
