/* import React from 'react';
import { Router, Route, Switch } from 'dva/router';
 import IndexPage from './routes/IndexPage';
import Products from './routes/Products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}
 */
import React from 'react';
import {  routerRedux, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
const { ConnectedRouter } = routerRedux;
const routes = [
  { 
    path: '/', 
    name: 'IndexPage',
    models: () => [import('./models/example')],
    component: () => import('./routes/IndexPage')
   },
   {
     path: '/products',
     name: 'product',
     models: () => [import('./models/products')],
     component: () => import('./routes/Products')
   }
];

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
