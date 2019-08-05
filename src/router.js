import React from 'react';
import {  Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import routes from './routes/index';

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
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
    </Router>
  );
}

export default RouterConfig;
