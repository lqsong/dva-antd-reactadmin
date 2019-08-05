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
          routes.map(({path, name, layout, models, component}) => {
            const Component = dynamic({app, models, component});
            if (layout) {
              const Layout = layout;
              return (
                <Layout 
                    path={path} 
                    key={name} 
                    exact
                    component={Component}
                />
            );
            }
            return (
              <Route 
                  path={path} 
                  key={name} 
                  exact
                  render={
                    (props) => {
                      return (<Component {...props} />);
                    }
                  }
              />
            );
          })
        }
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
