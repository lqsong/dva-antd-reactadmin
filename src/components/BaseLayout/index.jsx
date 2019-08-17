/**
 * 默认框架
 * @author liqingsong<957698457@qq.com>
 * @weburl http://www.liqingsong.cc 
 *         http://www.wyxgn.com
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import style from './index.less';

import { RouteWithSubRoutes } from '@/utils/core';

import SideMenu from '@/components/BaseLayout/components/SideMenu';

import { Layout,  Breadcrumb, Icon } from 'antd';
const { Header, Sider, Content, Footer } = Layout;

class BaseLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
          collapsedWidth: 80,
          siderWidth: 200,
          collapsed: false
        };
    }

    // 在第一次渲染后调用，只在客户端。
    componentDidMount() {
      this.props.dispatch({type: 'baselayout/getMenu'}); //设置导航
      // console.log(this.props.baselayout.menulist);
      // console.log(this.props);
    }
 
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
            <SideMenu item={this.props.baselayout.menulist} pathname={this.props.global.pathname} />
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

function mapStateToProps({ global, baselayout }) {
  return { global, baselayout };
}

export default connect(mapStateToProps)(BaseLayout);
