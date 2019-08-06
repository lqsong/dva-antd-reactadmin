import React from 'react';
import {connect} from 'dva';
import { Link } from 'dva/router';
import { RouteWithSubRoutes } from '@/utils/core';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import style from './index.less';
const { Header, Sider, Content, Footer } = Layout;

class BaseLayout extends React.Component {
    state = {
      collapsedWidth: 80,
      siderWidth: 200,
      collapsed: false
    };
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };

    getHeadWidth = () => {
      const { collapsedWidth, siderWidth, collapsed  } = this.state;
      return collapsed ? `calc(100% - ${collapsedWidth}px)` : `calc(100% - ${siderWidth}px)`;
    }

    getContentPaddingLeft= () => {
      const { collapsedWidth, siderWidth, collapsed  } = this.state;
      return collapsed ? `${collapsedWidth}px` : `${siderWidth}px`;
    }
  
    render() {
      const width = this.getHeadWidth();
      const paddingLeft = this.getContentPaddingLeft();
      return (
        <Layout id="lqs-base-layout">
          <Sider trigger={null} width={this.state.siderWidth} collapsedWidth={this.state.collapsedWidth} collapsible collapsed={this.state.collapsed}  style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}>
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
          <Layout style={{  minHeight: '100vh', paddingLeft }}>
            <Header style={{ background: '#fff', padding: 0, zIndex: 2, width }} className={style.headerfixed}>
              <Icon
                className={style.trigger}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <Breadcrumb className={style.breadcrumb}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
            </Header>
            <Content  style={{ padding: '88px 24px 24px' }}  >
                {     
                this.props.routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))
                }
            </Content>
            <Footer style={{ textAlign: 'center' }}>Dva Antd RecatAdmin ©2019 Created by WYXGN.COM</Footer>
          </Layout>
        </Layout>
      );
    }
}

BaseLayout.propTypes = {
};

export default connect()(BaseLayout);