export default [
  { 
    path: '/', 
    name: 'IndexPage',
    models: () => [],
    component: () => import('./home/')
   },
   {
     path: '/products',
     name: 'product',
     models: () => [import('./products/models')],
     component: () => import('./products/')
   }
];