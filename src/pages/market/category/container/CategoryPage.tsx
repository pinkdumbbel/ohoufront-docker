import React, { useEffect, useState } from 'react';
import AppLayout from '@/common/applayout/AppLayout';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions, getState } from '../state';
import { useMounted } from '@/hooks';
import { Tree, Breadcrumb, Layout, Carousel, Card } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const CategoryPage: React.FC = () => {
  const { Sider, Content } = Layout;
  const { Meta } = Card;

  const dispatch = useDispatch();
  const [breadCrumb, setBreadCrumb] = useState([]);
  const categoryTree = useSelector((state) => getState(state).categoryTree);

  useMounted(() => {
    dispatch(actions.getCategoryTree());
  });

  const onSelectTree = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    background: '#364d79',
  };

  return (
    <AppLayout>
      <div className="feed-container">
        <div className="feed-wrap">
          <div className="feed-row">
            <Sider width={300} className="feed-sidebar">
              <Tree showLine={false} switcherIcon={<DownOutlined />} treeData={categoryTree} onSelect={onSelectTree} />
            </Sider>
            <Content className="feed-content">
              <Breadcrumb separator=">">
                <Breadcrumb.Item>
                  <a href="">가구</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">소파/거실</a>
                </Breadcrumb.Item>
              </Breadcrumb>
              <Carousel>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
              <div className="category-content">
                <Card
                  hoverable
                  style={{ width: 265 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                  hoverable
                  style={{ width: 265 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                  hoverable
                  style={{ width: 265 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                  hoverable
                  style={{ width: 265 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                  hoverable
                  style={{ width: 265 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                  hoverable
                  style={{ width: 265 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </div>
            </Content>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CategoryPage;
