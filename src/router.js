import React from 'react';
import { routerRedux, Switch, Route, Redirect } from 'dva/router';
import { RouteWithSubRoutes } from '@/utils/core';
import Page404 from '@/routes/single-page/404';
import routes from '@/routes/index';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={
          () => (<Redirect to="/base/home"/>)
        }/>
        <Route exact path="/base" render={
          () => (<Redirect to="/base/home"/>)
        }/>        
        {
          routes(app).map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} app={app} />
          ))
        }
        <Route component={Page404} />
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
