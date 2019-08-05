
import {  Route } from 'dva/router';

export const  RouteWithSubRoutes = (route) => {
    return (
      <Route
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
}