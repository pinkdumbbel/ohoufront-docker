import { Layout } from 'antd';
import React from 'react';
import './style.css';
const Footer: React.FC = () => {
  const { Footer } = Layout;

  const footerItems = ['브랜드 스토리', '회사소개', '채용정보', '이용약관', '공지사항'];
  return (
    <Footer className="layout-footer">
      <div className="layout-footer-content">
        <ul className="layout-footer-shortcut">
          {footerItems.map((item) => (
            <li>
              <span className="layout-footer-shortcut-item">{item}</span>
            </li>
          ))}
        </ul>

        <address className="layout-footer-info-wrap">
          <dl className="layout-footer-info">
            <span className="layout-footer-info-item">상호명: (주)버킷플레이스</span>
            <span className="layout-footer-info-item">
              이메일: (고객문의) cs@bucketplace.net (제휴문의) contact@bucketplace.net
            </span>
            <span className="layout-footer-info-item">대표이사: 이승재</span>
            <span className="layout-footer-info-item">사업자등록번호: 119-86-91245</span>
            <span className="layout-footer-info-item">
              통신판매업신고번호: 제2018-서울서초-0580호 <b>사업자정보확인</b>
            </span>
          </dl>

          <dl className="layout-footer-info">
            <span className="layout-footer-info-item">주소: 서울 서초구 서초대로74길 4 삼성생명서초타워 25, 27층</span>
            <span className="layout-footer-info-item">
              우리은행 채무지급보증안내: (주)버킷플레이스는 고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증
              계약을 체결하여 안전거래를 보장하고 있습니다. <b>서비스가입사실 확인</b>
            </span>
          </dl>

          <span className="layout-footer-info">
            <span className="layout-footer-info-item">
              오늘의집은 개별 판매자가 상품을 판매하는 오픈마켓이며 (주)버킷플레이스는 통신판매중개자로 거래 당사자가
              아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 일체 책임을 지지 않습니다.
              <br />단 ㈜버킷플레이스가 판매자로 등록 판매한 상품의 경우는 판매자로서 책임을 부담합니다.
            </span>
          </span>
        </address>

        <p className="layout-footer-copyright">Copyright 2014. bucketplace, Co., Ltd. All rights reserved</p>
      </div>
    </Footer>
  );
};

export default Footer;
