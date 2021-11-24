import React from 'react';
import { Modal, Table, Space, Layout, Button } from 'antd';
import AppLayout from '@/components/appLayout/AppLayout';
import { useSelector } from 'react-redux';
import { getState } from '../state';
import './style.css';

const UserManagePage: React.FC = (props) => {
  const { Column } = Table;
  const { Content } = Layout;
  const list = useSelector((state) => getState(state).userList);

  const warning = () => {
    Modal.warning({
      title: '유저탈퇴',
      content: '선택한 유저를 탈퇴시키시겠습니까?',
    });
  };

  return (
    <>
      <AppLayout>
        <div className="feed-container">
          <div className="feed-wrap">
            <div className="userManage-container">
              <div className="feed-row">
                <Content className="feed-content">
                  <Table dataSource={list}>
                    <Column title="이메일" dataIndex="email" key="email" />
                    <Column title="닉네임" dataIndex="nickname" key="nickname" />
                    <Column
                      title="Action"
                      key="action"
                      render={() => (
                        <Space size="middle">
                          <Button>상세</Button>
                          <Button danger onClick={warning}>
                            탈퇴
                          </Button>
                        </Space>
                      )}
                    />
                  </Table>
                </Content>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default UserManagePage;
