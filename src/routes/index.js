import dynamic from 'dva/dynamic';
import BaseLayout from '@/components/BaseLayout/';
import EmptyLayout from '@/components/EmptyLayout/';
import Page404 from '@/routes/single-page/404';
// import Login from '@/routes/login/index';
// import HomeIndex from '@/routes/home/index';
// import UsersList from '@/routes/users/list';
// import UsersAdd from '@/routes/users/add';

export default [
  {
    path: "/login",
    // component: Login
    component: dynamic({ component: () => import('@/routes/login/index'), models:()=>[] })
  },
  {
    path: "/404",
    component: Page404
  },
  // 基础框架
  {
    path: "/base",
    component: BaseLayout,
    routes: [
      {
        path: "/base/home",
        // component: HomeIndex
        component: dynamic({ component: () => import('@/routes/home/index'), models:()=>[] })
      },
      {
        path: "/base/users",
        component: EmptyLayout,
        routes: [
          {
            path: "/base/users/list",
            // component: UsersList
            component: dynamic({ component: () => import('@/routes/users/list'), models:()=>[] })
          },
          {
            path: "/base/users/add",
            // component: UsersAdd
            component: dynamic({ component: () => import('@/routes/users/add'), models:()=>[] })
          }
        ]
      }

    ]
  }
  
 
];
