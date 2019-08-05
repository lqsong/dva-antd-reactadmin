import React from 'react';
import {connect} from 'dva';
import { Route } from 'dva/router';

const BaseLayout = ({component: Component, ...props}) => {
  return (
    <Route {...props} render={matchProps => (
      <div className="DefaultLayout">
        <div className="Header">Header</div>
          <Component {...matchProps} />
        <div className="Footer">Footer</div>
      </div>
    )} />
  );
};

BaseLayout.propTypes = {
};

export default connect()(BaseLayout);