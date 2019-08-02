import React from 'react';
import {  routerRedux, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import routes from './routes/index';
const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {
          routes.map(({path, name, models, component}) => {
            return (
              <Route path={path} key={name} exact component={dynamic({app, models, component})} />
            );
          })
        }
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
