import React from 'react';
import { Route, Switch } from 'dva/router';
import {connect} from 'dva';
import IndexPage from '../../routes/IndexPage';
import Products from '../../routes/Products';

const BaseLayout = ({match}) => {
  return (
    <div>
        <div> header</div>
        <div>
        <Switch>
            <Route path={match.path} exact component={IndexPage} />
            <Route path='/productss' exact component={Products} />
        </Switch>
        </div>
        <div>footer</div>
    </div>
  );
};

BaseLayout.propTypes = {
};

export default connect()(BaseLayout);