/**
 * 路由配置、菜单配置
 * @author liqingsong<957698457@qq.com>
 * @weburl http://www.liqingsong.cc 
 *         http://www.wyxgn.com
 */
/**
 * // meta可配置的参数:
 * meta: {
 *  title: { String } 显示在侧边栏的文字
 *  icon: (-) 该页面在左侧菜单显示的图标
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  showAlways: (false) 设为true后如果该路由只有一个子路由，在菜单中也会显示该父级菜单
 *  href: 'https://xxx' (default: null) 用于跳转到外部连接
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 * }
 */
import dynamic from 'dva/dynamic';
// import BaseLayout from '@/components/BaseLayout/';
import EmptyLayout from '@/components/EmptyLayout/';
import Page404 from '@/routes/single-page/404/index';
// import Login from '@/routes/login/index';
// import HomeIndex from '@/routes/home/index';
// import UsersList from '@/routes/users/list';
// import UsersAdd from '@/routes/users/add';

export default (app) => {
    const appBool = (typeof app) !== 'undefined';
    return  [      
        {
          path: "/login",
          // component: Login
          component: appBool ? dynamic({app, component: () => import('@/routes/login/index'), models:()=>[] }) : ''
        },
        {
          path: "/404",
          component: appBool ? Page404 : ''
        },
        // 基础框架
        {
          path: "/base",
          // component: appBool ? BaseLayout : '',
          component: appBool ? dynamic({app, component: () => import('@/components/BaseLayout/'), models:()=>[import('@/components/BaseLayout/models/index')] }) : '',
          routes: [
            {
              path: "/base/home",
              meta: {                
                title: '首页',
                icon: 'user',
                hideInMenu: false,                
                access: ['admin']                
              },
              component: appBool ? dynamic({app, component: () => import('@/routes/home/index'), models:()=>[] }) : ''
            },
            {
              path: "/base/users",
              meta: {                
                title: '用户样例',
                icon: 'user',
                hideInMenu: false,                
                access: ['admin']                
              },
              component: appBool ? EmptyLayout : '',
              routes: [
                {
                  path: "/base/users/list",
                  meta: {                
                    title: '用户列表',
                    hideInMenu: false,                
                    access: ['admin']                
                  },
                  component: appBool ? dynamic({app, component: () => import('@/routes/users/list'), models:()=>[import('@/routes/users/models/index')] }) : ''
                },
                {
                  path: "/base/users/add",
                  meta: {                
                    title: '用户添加',
                    hideInMenu: false,                
                    access: ['admin']                
                  },
                  component: appBool ? dynamic({app, component: () => import('@/routes/users/add'), models:()=>[] }) : ''
                }
              ]
            },
            {
              path: "/base/products",
              meta: {                
                title: '产品样例',
                icon: 'user',
                hideInMenu: false,                
                access: ['admin']                
              },
              component: appBool ? EmptyLayout : '',
              routes: [
                {
                  path: "/base/products/list",
                  meta: {                
                    title: '产品列表',
                    icon: 'appstore', 
                    hideInMenu: false,                                   
                    access: ['admin']                
                  },
                  component: appBool ? dynamic({app, component: () => import('@/routes/products/index'), models:()=>[import('@/routes/products/models/index')] }) : ''
                }
              ]
            }


            

          ]
        }
                
      
    ];
}
