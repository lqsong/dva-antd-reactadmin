import React from 'react';
import {connect} from 'dva';
import { Route, Link } from 'dva/router';

const BaseLayout = ({component: Component, ...props}) => {
  return (
    <Route {...props} render={matchProps => (
      <div className="DefaultLayout">
        <div className="Header">
          Header&nbsp;&nbsp;
          <Link to="/products">plist</Link>&nbsp;&nbsp;
          <Link to="/products/add">padd</Link>
        </div>
        
          <Component {...matchProps} />
       
        <div className="Footer">Footer</div>
      </div>
    )} />
  );
};

BaseLayout.propTypes = {
};

export default connect()(BaseLayout);