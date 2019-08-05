/* export default [
  { 
    path: '/', 
    name: 'IndexPage',
    // layout: BaseLayout,
    models: () => [],
    component: () => import('./home/')
   },
   {
     path: '/products',
     name: 'product',
     layout: BaseLayout,
     models: () => [import('./products/models')],
     component: () => import('./products/')
   },
   {
    path: '/products/add',
    name: 'product-add',
    layout: BaseLayout,
    models: () => [],
    component: () => import('./products/add')
  }
]; */
import BaseLayout from '@/components/BaseLayout/';
import EmptyLayout from '@/components/EmptyLayout/';
import Page404 from '@/routes/single-page/404';
import Login from '@/routes/login/index';
import HomeIndex from '@/routes/home/index';
import UsersList from '@/routes/users/list';
import UsersAdd from '@/routes/users/add';

export default [
  {
    path: "/login",
    component: Login
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
        component: HomeIndex
      },
      {
        path: "/base/users",
        component: EmptyLayout,
        routes: [
          {
            path: "/base/users/list",
            component: UsersList
          },
          {
            path: "/base/users/add",
            component: UsersAdd
          }
        ]
      }

    ]
  }
  
 
];
