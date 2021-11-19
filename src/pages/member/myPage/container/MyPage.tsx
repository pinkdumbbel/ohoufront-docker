import React, { useState } from 'react';
import './myPage.css';
import { Radio, Upload } from 'antd';
import { Form, Button, Input, Select } from 'antd';
import AppLayout from '@/components/appLayout/AppLayout';
import { MyPageFormData } from '@/types/myPage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { actions } from '../state';
import MyPageFormItem from '@/components/myPageFormItem/MyPageFormItem';
import { defaultProfileImg, emails } from '@/utils/vars';
import { hidefindDOMNodeError } from '@/utils/func';
import { formatWithOptions } from 'util';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile, RcFile } from 'antd/lib/upload/interface';
import { Content } from 'antd/lib/layout/layout';

/* import Input from '@/common/Input'; */

const MyPage: React.FC = () => {
  const [fileContent, setFileContent] = useState<string | ArrayBuffer | null>(defaultProfileImg);
  const [fileChangeFlag, setFileChangeFlag] = useState(false);

  hidefindDOMNodeError();

  const [form] = Form.useForm();
  const dispatch = useDispatch<AppDispatch>();

  const onFileChange = (file: RcFile) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      if (e.target && e.target.result !== fileContent) {
        setFileContent(e.target.result);
        console.log(e.target.result);
        setFileChangeFlag(true);
      }
    };
  };

  const myPageSubmit = () => {
    const formData = form.getFieldsValue();
    if (fileChangeFlag) {
      formData.file = fileContent;
      setFileChangeFlag(false);
    }
    console.log('MyPageSubmit', formData);
    //dispatch(actions.editProfileSubmit(formData));
  };
  return (
    <AppLayout>
      <div className="edit-user-info-wrap">
        <div className="edit-user-info-header">
          <div className="edit-user-info-header-title">회원정보수정</div>
        </div>

        <Form form={form} autoComplete="off">
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
            <Form.Item name="homepage" noStyle>
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
                      <Upload accept="image/*" beforeUpload={onFileChange}>
                        <button className="image-single-input-entry-button" type="button">
                          <img className="image-single-input-entry-image" src={fileContent as string} alt="" />
                        </button>
                      </Upload>
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
