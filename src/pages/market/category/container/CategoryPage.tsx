import React, { useEffect, useState } from 'react';
import AppLayout from '@/components/appLayout/AppLayout';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions, getState } from '../state';
import { useMounted } from '@/hooks';
import { Tree, Breadcrumb, Layout, Carousel, Card } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import carosel1 from '@/components/images/carosel1.png';
import carosel2 from '@/components/images/carosel2.png';
import carosel3 from '@/components/images/carosel3.png';
import carosel4 from '@/components/images/carosel4.png';

const CategoryPage: React.FC = () => {
  const { Sider, Content } = Layout;
  const { Meta } = Card;

  const dispatch = useDispatch();
  const [breadCrumb, setBreadCrumb] = useState([]);
  const categoryTree = useSelector((state) => getState(state).categoryTree);

  useMounted(() => {
    dispatch(actions.getCategoryTree());
    dispatch(actions.getStoreItmes());
  });

  const onSelectTree = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
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
              <div className="bread-crumb">
                <Breadcrumb separator=">">
                  <Breadcrumb.Item>
                    <a href="">가구</a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <a href="">소파/거실</a>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="carosel-wrapper">
                <Carousel autoplay>
                  <div>
                    <div className="carosel1">
                      <img src={carosel1} alt="carosel1" />
                    </div>
                  </div>
                  <div>
                    <div className="carosel2">
                      <img src={carosel2} alt="carosel2" />
                    </div>
                  </div>
                  <div>
                    <div className="carosel3">
                      <img src={carosel3} alt="carosel3" />
                    </div>
                  </div>
                  <div>
                    <div className="carosel4">
                      <img src={carosel4} alt="carosel4" />
                    </div>
                  </div>
                </Carousel>
              </div>
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
