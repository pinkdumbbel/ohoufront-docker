import React, { useEffect } from 'react';
import AppLayout from '@/common/applayout/AppLayout';
import { Layout } from 'antd';
import './style.css';
import { useDispatch } from 'react-redux';
import { actions } from '../state';
// import { useMounted } from '@/hooks';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const CategoryPage: React.FC = () => {
  const { Sider, Content } = Layout;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('getCategory Tree');
    dispatch(actions.getCategoryTree());
  }, []);

  return (
    <AppLayout>
      <div className="feed-container">
        <div className="feed-wrap">
          <div className="feed-row">
            <Sider width={300} className="feed-sidebar">
              <Tree
                showLine
                switcherIcon={<DownOutlined />}
                defaultExpandedKeys={['0-0-0']}
                // onSelect={this.onSelect}
                treeData={[
                  {
                    title: 'parent 1',
                    key: '0-0',
                    children: [
                      {
                        title: 'parent 1-0',
                        key: '0-0-0',
                        children: [
                          {
                            title: 'leaf',
                            key: '0-0-0-0',
                          },
                          {
                            title: 'leaf',
                            key: '0-0-0-1',
                          },
                          {
                            title: 'leaf',
                            key: '0-0-0-2',
                          },
                        ],
                      },
                      {
                        title: 'parent 1-1',
                        key: '0-0-1',
                        children: [
                          {
                            title: 'leaf',
                            key: '0-0-1-0',
                          },
                        ],
                      },
                      {
                        title: 'parent 1-2',
                        key: '0-0-2',
                        children: [
                          {
                            title: 'leaf',
                            key: '0-0-2-0',
                          },
                          {
                            title: 'leaf',
                            key: '0-0-2-1',
                          },
                        ],
                      },
                    ],
                  },
                ]}
              />
            </Sider>
            <Content className="feed-content"></Content>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CategoryPage;
