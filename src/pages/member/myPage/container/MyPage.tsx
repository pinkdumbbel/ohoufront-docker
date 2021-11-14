import React from 'react';
import './style.css';
import { Radio } from 'antd';
import { Form, Button, Input, Select } from 'antd';
import AppLayout from '@/components/appLayout/AppLayout';
import { MyPageFormData } from '@/types/myPage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { actions } from '../state';
import MyPageFormItem from '@/components/myPageFormItem/MyPageFormItem';
import { emails } from '@/utils/vars';

/* import Input from '@/common/Input'; */

const MyPage: React.FC = () => {
  const [form] = Form.useForm<MyPageFormData>();
  const dispatch = useDispatch<AppDispatch>();

  const myPageSubmit = () => {
    const formData = form.getFieldsValue();
    console.log('MyPageSubmit', formData);
    dispatch(actions.editProfileSubmit(formData));
  };
  return (
    <AppLayout>
      <div className="edit-user-info-wrap">
        <div className="edit-user-info-header">
          <div className="edit-user-info-header-title">회원정보수정</div>
        </div>

        <Form form={form}>
          <MyPageFormItem title="이메일" required={true}>
            <div className="input-group email-input-wrap">
              <span className="email-input-local">
                <Form.Item name="email" noStyle>
                  <Input size="large" placeholder="이메일" />
                </Form.Item>
              </span>
              <span className="email-input-separator">@</span>
              <span className="email-input-domain">
                <Form.Item name="email_domain">
                  <Select className="form-control-email-domain" size="large">
                    {emails.map((email) => (
                      <Select.Option key={email} value={email}>
                        {email}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </span>
            </div>
          </MyPageFormItem>

          <MyPageFormItem title="별명" required={true}>
            <Form.Item name="nickname" noStyle>
              <Input size="large" placeholder="별명" />
            </Form.Item>
          </MyPageFormItem>

          <MyPageFormItem title="홈페이지" required={true}>
            <Form.Item name="nickname" noStyle>
              <Input size="large" placeholder="https://ohou.se" />
            </Form.Item>
          </MyPageFormItem>

          <div className="edit-user-info-form-item">
            <div className="edit-user-info-form-item-title">성별</div>
            <div className="edit-user-info-form-item-group expert-form-group expert-form-group-gender">
              <div className="expert-form-group-content">
                <Radio.Group>
                  <Radio value="m">남성</Radio>
                  <Radio value="f">여성</Radio>
                </Radio.Group>
              </div>
            </div>
          </div>

          <div className="edit-user-info-form-item">
            <div className="edit-user-info-form-item-title">프로필 이미지</div>

            <div className="edit-user-info-form-item-group expert-form-group">
              <div className="edit-user-info-form-item-field edit-user-info-form-item-field-profile">
                <div className="image-single-input-wrap">
                  <ul className="image-single-input">
                    <li className="image-singl-einput-entry">
                      <button className="image-single-input-entry-button" type="button">
                        <img
                          className="image-single-input-entry-image"
                          src="https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&amp;w=640&amp;h=640&amp;c=c"
                          alt=""
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Button type="primary" className="edit-user-info-submit-btn" onClick={myPageSubmit}>
            회원 정보 수정
          </Button>
        </Form>
      </div>
    </AppLayout>
  );
};

export default MyPage;
