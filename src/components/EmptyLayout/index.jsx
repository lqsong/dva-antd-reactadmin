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