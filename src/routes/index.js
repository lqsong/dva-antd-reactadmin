import dynamic from 'dva/dynamic';
import BaseLayout from '@/components/BaseLayout/';
import EmptyLayout from '@/components/EmptyLayout/';
import Page404 from '@/routes/single-page/404';
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
          component: appBool ? BaseLayout : '',
          routes: [
            {
              path: "/base/home",
              // component: HomeIndex
              component: appBool ? dynamic({app, component: () => import('@/routes/home/index'), models:()=>[] }) : ''
            },
            {
              path: "/base/users",
              component: appBool ? EmptyLayout : '',
              routes: [
                {
                  path: "/base/users/list",
                  // component: UsersList
                  component: appBool ? dynamic({app, component: () => import('@/routes/users/list'), models:()=>[import('@/routes/users/models')] }) : ''
                },
                {
                  path: "/base/users/add",
                  // component: UsersAdd
                  component: appBool ? dynamic({app, component: () => import('@/routes/users/add'), models:()=>[] }) : ''
                }
              ]
            },
            {
              path: "/base/products",
              component: appBool ? EmptyLayout : '',
              routes: [
                {
                  path: "/base/products/list",
                  component: appBool ? dynamic({app, component: () => import('@/routes/products/index'), models:()=>[import('@/routes/products/models')] }) : ''
                }
              ]
            }

          ]
        }
                
      
    ];
}
