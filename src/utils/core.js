/**
 * 核心函数文件
 * @author liqingsong<957698457@qq.com>
 * @weburl http://www.liqingsong.cc 
 *         http://www.wyxgn.com
 */
import { Route } from 'dva/router';
import { forEach, hasOneOf } from '@/utils/tools'

/**
 * 路由嵌套-模板视图组件调用
 * @author liqingsong<957698457@qq.com>
 */
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

/**
 * @param {Object} item
 * @description 菜单函数 - 针对路由判断是否有子routes
 */
export const hasChildRoutes = (item) => {
  return item.routes && item.routes.length !== 0;
};

/**
 * @param {Object} item
 * @description 菜单函数 - 针对路由判断是否显示子菜单路由
 */
export const showChildRoutes = (item) => {
  return item.routes && (item.routes.length > 1 || (item.meta && item.meta.showAlways));
}

/**
 * @param {Array} routerList 路由列表
 * @param {String} layoutPath 路由下的框架path
 * @returns {Array}
 * @description 菜单函数 - 根据路由获取对应框架的菜单
 */
export const getMenuByRouterLayout = (routerList, layoutPath, access) => {
    let list = [];  
    if (!layoutPath) {
      return [];
    }
    for (var j = 0,len = routerList.length; j < len; j++) {
        if (routerList[j]['path'] === layoutPath) {
          list = routerList[j]['routes'];
          break; 
        }
    }

    return getMenuByRouter(list, access);
}

/**
 * @param {Array} list 菜单列表
 * @returns {Array}
 * @description 菜单函数 - 根据路由返回菜单
 */
export const getMenuByRouter = (list, access) => {
  let res = [];
  forEach (list, item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        path: item.path,
        meta: item.meta
      };
      let thisEle = showThisMenuEle(item, access);      
      if ((hasChildRoutes(item) || (item.meta && item.meta.showAlways)) && thisEle) {        
        obj.routes = getMenuByRouter(item.routes, access);
      }
      if (item.meta && item.meta.href) obj.href = item.meta.href;
      if (thisEle) res.push(obj);
    }
  });
  return res;
};

// 菜单函数 - 判断是否有权限显示这个Ele
const showThisMenuEle = (item, access) => {
  if (item.meta && item.meta.access && item.meta.access.length) {
    if (hasOneOf(item.meta.access, access)) return true;
    else return false;
  } else return true;
};