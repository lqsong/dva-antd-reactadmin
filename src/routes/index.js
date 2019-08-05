import BaseLayout from '../components/BaseLayout/'
export default [
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
];