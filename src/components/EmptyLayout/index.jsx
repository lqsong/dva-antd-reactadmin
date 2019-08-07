/**
 * 空框架
 * @author liqingsong<957698457@qq.com>
 * @weburl http://www.liqingsong.cc 
 *         http://www.wyxgn.com
 */
import React from 'react';
import {connect} from 'dva';
import { RouteWithSubRoutes } from '@/utils/core';

const EmptyLayout = ({routes}) => {
  return (
      routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))
  );
};

EmptyLayout.propTypes = {
};

export default connect()(EmptyLayout);