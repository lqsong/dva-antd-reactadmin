import React from 'react';
import {connect} from 'dva';
import { Link } from 'dva/router';
import { RouteWithSubRoutes } from '@/utils/core';

import { Layout, Menu, Icon } from 'antd';
import style from './index.less';
const { Header, Sider, Content } = Layout;

class BaseLayout extends React.Component {
    state = {
      collapsed: false,
    };
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
  
    render() {
      return (
        <Layout id="lqs-base-layout">
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className={style.logo} />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/base/home">
                    <Icon type="user" />
                    <span>首页</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/base/users/add">
                  <Icon type="video-camera" />
                  <span>用户添加</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/base/users/list">
                  <Icon type="upload" />
                  <span>用户列表</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className={style.trigger}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              {     
              this.props.routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))
              }
            </Content>
          </Layout>
        </Layout>
      );
    }
}

BaseLayout.propTypes = {
};

export default connect()(BaseLayout);