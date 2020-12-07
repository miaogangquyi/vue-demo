import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: () => import('@/views/table/index.vue'),
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  // children: [
  //   // {
  //   //   path: 'drag-table',
  //   //   component: () => import('@/views/table/drag-table'),
  //   //   name: 'DragTable',
  //   //   meta: { title: 'Drag Table' }
  //   // },
  //   // {
  //   //   path: 'inline-edit-table',
  //   //   component: () => import('@/views/table/inline-edit-table'),
  //   //   name: 'InlineEditTable',
  //   //   meta: { title: 'Inline Edit' }
  //   // },
  //   {
  //     path: 'table',
  //     component: () => import('@/views/table/index.vue'),
  //     name: 'table',
  //     meta: { title: 'Complex Table' }
  //   }
  // ]
}
export default tableRouter
