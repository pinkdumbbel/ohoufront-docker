import React, { useState } from 'react';
import Header from '@/common/header/Header';
import Footer from '@/common/footer/Footer';
import './style.css';
import { Radio } from 'antd';
import { Button } from 'antd';
import Popout from '@/common/popout/Popout';

/* import Input from '@/common/Input'; */

const MyPage: React.FC = () => {
  const editUser = 'edit-user-info';
  const editUserFromItem = 'edit-user-info-form-item';
  const emails = ['naver.com', 'daum.net', 'gmail.com', '직접입력'];

  const [isMounted, setIsMounted] = useState(false);
  const onMounted = () => setIsMounted(!isMounted);
  return (
    <>
      <Header onMounted={onMounted} />

      <div className={`${editUser}-wrap`}>
        <div className={`${editUser}-header`}>
          <div className={`${editUser}-header-title`}>회원정보수정</div>
        </div>

        <form>
          <div className={`${editUserFromItem}`}>
            <div className={`${editUserFromItem}-title`}>
              이메일
              <div className={`${editUserFromItem}-title-require`}> * 필수항목</div>
            </div>

            <div className={`${editUserFromItem}-group expert-form-group`}>
              <div className="expert-form-group-content">
                <div className="expert-form-group-input">
                  <div className="edit-user-info-form-item-field">
                    <div className="input-group email-input">
                      <span className="email-input-local">
                        <input className="form-control" placeholder="이메일" />
                      </span>
                      <span className="email-input-separator">@</span>
                      <span className="email-input-domain">
                        <select className="form-control">
                          {emails.map((email) => (
                            <option key={email} value={email}>
                              {email}
                            </option>
                          ))}
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${editUserFromItem}`}>
            <div className={`${editUserFromItem}-title`}>홈페이지</div>

            <div className={`${editUserFromItem}-group expert-form-group`}>
              <div className="expert-form-group-content">
                <div className="expert-form-group-input">
                  <div className="edit-user-info-form-item-field">
                    <input className="form-control" placeholder="https://ohou.se" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${editUserFromItem}`}>
            <div className={`${editUserFromItem}-title`}>성별</div>

            <div className={`${editUserFromItem}-group expert-form-group expert-form-group-gender`}>
              <div className="expert-form-group-content">
                <Radio.Group>
                  <Radio value="m">남성</Radio>
                  <Radio value="f">여성</Radio>
                </Radio.Group>
              </div>
            </div>
          </div>

          <div className={`${editUserFromItem}`}>
            <div className={`${editUserFromItem}-title`}>생년월일</div>

            <div className={`${editUserFromItem}-group expert-form-group`}>
              <div className="expert-form-group-content">
                <div className="expert-form-group-input">
                  <div className="edit-user-info-form-item-field">
                    <input className="form-control" placeholder="YYYY-MM-DD" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${editUserFromItem}`}>
            <div className={`${editUserFromItem}-title`}>프로필 이미지</div>

            <div className={`expert-form-group ${editUserFromItem}-group`}>
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
          <Button type="primary" className={`${editUser}-submit-btn`}>
            회원 정보 수정
          </Button>
        </form>
      </div>

      <Footer />
      <Popout isMounted={isMounted} />
    </>
  );
};

export default MyPage;
